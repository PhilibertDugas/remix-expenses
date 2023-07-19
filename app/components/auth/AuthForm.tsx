import { Form, Link, useSearchParams } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || "login";

  const submitButtonCaption = authMode === "login" ? "Login" : "Create User";
  const toggleButtonCaption =
    authMode === "login" ? "Create a new user" : "Log in with existing user";
  return (
    <Form
      method="post"
      className="w-1/2 m-8 rounded-lg bg-blue-500 text-white	shadow-lg text-center"
      id="auth-form"
    >
      <div className="rounded-full p-2 border-solid border-white border-2 my-1 justify-center align-middle inline-flex">
        {authMode === "login" ? <FaLock /> : <FaUserPlus />}
      </div>
      <p className="p-1 flex flex-col items-center">
        <label className="p-1" htmlFor="email">
          Email Address
        </label>
        <input
          className="w-1/2 text-center rounded-lg border-white border-solid border-2"
          type="email"
          id="email"
          name="email"
          required
        />
      </p>
      <p className="p-1 flex flex-col items-center">
        <label className="p-1" htmlFor="password">
          Password
        </label>
        <input
          className="w-1/2 text-center rounded-lg border-white border-solid border-2"
          type="password"
          id="password"
          name="password"
          minLength={7}
        />
      </p>
      <div className="flex-col flex items-center mt-8">
        <button className="p-1 border-white border-solid border-2 w-1/2 rounded-xl bg-blue-500 hover:bg-cyan-500 max-w-xs">
          {submitButtonCaption}
        </button>
        <Link
          className="text-xs text-white hover:text-cyan-500 mt-2"
          to={authMode === "login" ? "?mode=signup" : "?mode=login"}
        >
          {toggleButtonCaption}
        </Link>
      </div>
    </Form>
  );
}

export default AuthForm;
