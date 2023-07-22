import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import { getExpenses } from "~/models/expenses.server";
import { requireUserSession } from "~/models/user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserSession(request);
  const expenses = await getExpenses(userId);
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
