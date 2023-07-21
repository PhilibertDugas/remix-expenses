import { ActionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import AuthForm from "~/components/auth/AuthForm";

export const action = async ({ request }: ActionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  invariant(typeof email === "string", "email must be defined");
  invariant(typeof password === "string", "password must be defined");

  // validate user input
  if (authMode === "login") {
    // login
  } else {
    // signup
  }
};

export default function AuthPage() {
  return <AuthForm />;
}
