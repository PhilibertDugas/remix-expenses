import { Link } from "@remix-run/react";

function Logo() {
  return (
    <h1 id="logo" className="text-blue-200 text-lg justify-self-start">
      <Link className="text-inherit" to="/">
        RemixExpenses
      </Link>
    </h1>
  );
}

export default Logo;
