import type { User } from "@prisma/client";
import { prisma } from "~/data/database.server";
import { hash, compare } from "bcryptjs";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

const SESSION_SECRET = process.env.SESSION_SECRET as string;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: true,
  },
});

const createUserSession = async (userId: string, redirectPath: string) => {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
};

export const signup = async ({
  email,
  password,
}: Pick<User, "email" | "password">) => {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    const error = new Error("user already exists");
    throw error;
  }

  const passwordHash = await hash(password, 12);

  const user = await prisma.user.create({
    data: { email, password: passwordHash },
  });
  return createUserSession(user.id, "/expenses");
};

export const login = async ({
  email,
  password,
}: Pick<User, "email" | "password">) => {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    const error = new Error("user doesn't exists");
    throw error;
  }

  const passwordCorrect = await compare(password, existingUser.password);
  if (!passwordCorrect) {
    const error = new Error("password is wrong");
    throw error;
  }

  return createUserSession(existingUser.id, "/expenses");
};
