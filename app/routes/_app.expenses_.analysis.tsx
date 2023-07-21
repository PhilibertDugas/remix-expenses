import { useLoaderData } from "@remix-run/react";
import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import { getExpenses } from "~/models/expenses.server";

export const loader = async () => {
  const expenses = await getExpenses();
  return expenses;
};

export default function ExpensesAnalysis() {
  const expenses = useLoaderData<typeof loader>();
  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
}
