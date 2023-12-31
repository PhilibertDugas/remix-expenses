import { Form, NavLink } from "@remix-run/react";
import Logo from "../util/Logo";

interface Props {
  userId: string | null;
}

function MainHeader({ userId }: Props) {
  return (
    <header
      id="main-header"
      className="w-10/12 p-4 grid grid-cols-3 justify-center items-center justify-items-center"
    >
      <Logo />
      <nav id="main-nav">
        <ul className="flex gap-8 flex-1">
          <li>
            <NavLink
              className="text-white hover:text-blue-500 [&.active]:text-blue-500"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white hover:text-blue-500 [&.active]:text-blue-500"
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav" className="justify-self-end">
        <ul className="flex flex-1 gap-0">
          <li>
            {userId && (
              <Form method="POST" action="/logout">
                <button className="text-white hover:text-blue-500 [&.active]:text-blue-500 rounded-full bg-blue-800 px-8 py-2">
                  Logout
                </button>
              </Form>
            )}
            {!userId && (
              <NavLink
                to="/auth"
                className="text-white hover:text-blue-500 [&.active]:text-blue-500 rounded-full bg-blue-800 px-8 py-2"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
