import { ActionArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import AuthForm from "~/components/auth/AuthForm";
import { login, signup } from "~/models/user.server";
import {
  CredentialsValidationErrors,
  validateCredentials,
} from "~/models/validations.server";

export const action = async ({ request }: ActionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  invariant(typeof email === "string", "email must be defined");
  invariant(typeof password === "string", "password must be defined");

  try {
    validateCredentials({ email, password });
  } catch (error) {
    return error as CredentialsValidationErrors;
  }

  try {
    if (authMode === "login") {
      return await login({ email, password });
    } else {
      return await signup({ email, password });
    }
  } catch (error) {
    if (error instanceof Error) {
      return { credentials: error.message };
    }
  }
};

export default function AuthPage() {
  return <AuthForm />;
}
