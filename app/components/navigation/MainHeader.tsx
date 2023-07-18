import { NavLink } from "@remix-run/react";
import Logo from "../util/Logo";

function MainHeader() {
  return (
    <header
      id="main-header"
      className="p-4 grid grid-cols-3 justify-center items-center justify-items-center"
    >
      <Logo />
      <nav id="main-nav">
        <ul className="flex gap-8 flex-1">
          <li>
            <NavLink
              className="text-blue-200 hover:text-blue-500 [&.active]:text-blue-500"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-blue-200 hover:text-blue-500 [&.active]:text-blue-500"
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-blue-200 hover:text-blue-500 [&.active]:text-blue-500"
              to="/expenses"
            >
              Expenses
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav" className="justify-self-end">
        <ul className="flex flex-1 gap-0">
          <li>
            <NavLink
              to="/auth"
              className="text-blue-200 hover:text-blue-500 [&.active]:text-blue-500"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
