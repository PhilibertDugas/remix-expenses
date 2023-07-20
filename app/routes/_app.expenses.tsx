import { Link, Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";
import { json } from "@remix-run/node";
import { getExpenses } from "~/models/expenses.server";

export const loader = async () => {
  return json({ expenses: await getExpenses() });
};

export default function ExpensesPage() {
  const { expenses } = useLoaderData<typeof loader>();

  // Note - the returned data from the server for Date types is String - something to be aware of.

  return (
    <>
      <Outlet />
      <main className="w-11/12">
        <section
          id="expenses-action"
          className="mx-8 flex justify-center gap-4"
        >
          <Link
            className="flex gap-4 items-center text-blue-500 bg-white px-2 py-6 rounded-full hover:text-cyan-500"
            to="add"
          >
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a
            href="/expenses/raw"
            className="flex gap-4 items-center text-white bg-blue-500 px-2 py-6 rounded-full hover:text-cyan-500"
          >
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
}
