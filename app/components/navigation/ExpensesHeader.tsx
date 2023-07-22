import { Form, NavLink } from "@remix-run/react";

import Logo from "../util/Logo";

function ExpensesHeader() {
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
              to="/expenses"
              className="text-white hover:text-blue-500 [&.active]:text-blue-500"
            >
              Manage Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expenses/analysis"
              className="text-white hover:text-blue-500 [&.active]:text-blue-500"
            >
              Analyze Expenses
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav" className="justify-self-end">
        <Form method="POST" action="/logout">
          <button className="text-white hover:text-blue-500 [&.active]:text-blue-500 rounded-full bg-blue-800 px-8 py-2">
            Logout
          </button>
        </Form>
      </nav>
    </header>
  );
}

export default ExpensesHeader;
