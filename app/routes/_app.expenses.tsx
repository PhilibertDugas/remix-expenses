import { Link, Outlet } from "@remix-run/react";
import { Expense } from "~/components/expenses/ExpenseStatistics";
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";

const DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "First expense",
    amount: 12.92,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second expense",
    amount: 16.99,
    date: new Date().toISOString(),
  },
] as Expense[];

export default function ExpensesPage() {
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
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}
