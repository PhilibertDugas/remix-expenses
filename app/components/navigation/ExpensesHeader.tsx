import { NavLink } from "@remix-run/react";

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
              className="text-blue-200 hover:text-blue-500 [&.active]:text-blue-500"
            >
              Manage Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expenses/analysis"
              className="text-blue-200 hover:text-blue-500 [&.active]:text-blue-500"
            >
              Analyze Expenses
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav" className="justify-self-end">
        <button className="cta px-8 py-2 bg-blue-500 text-white rounded-full border-none inline-flex gap-2 items-center shadow-md">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default ExpensesHeader;
