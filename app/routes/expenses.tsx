import { Outlet } from "@remix-run/react";
import { Expense } from "~/components/expenses/ExpenseStatistics";
import ExpensesList from "~/components/expenses/ExpensesList";

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
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}
