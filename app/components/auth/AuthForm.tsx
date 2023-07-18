import { Form } from "@remix-run/react";
import { FaLock } from "react-icons/fa";

function AuthForm() {
  return (
    <Form
      method="post"
      className="w-1/2 m-8 rounded-lg bg-blue-50 text-blue-500	shadow-gray-100 shadow-lg text-center"
      id="auth-form"
    >
      <div className="rounded-full p-2 border-solid border-blue-500 border-2 my-1 justify-center align-middle inline-flex">
        <FaLock />
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
        <button className="p-1 border-white border-solid border-2 w-1/2 rounded-xl bg-blue-100 max-w-xs">
          Login
        </button>
        <a
          className="text-xs text-blue-500 hover:text-cyan-500 mt-2"
          href="/auth"
        >
          Log in with existing user
        </a>
      </div>
    </Form>
  );
}

export default AuthForm;
