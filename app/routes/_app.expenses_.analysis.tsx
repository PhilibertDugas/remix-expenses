import Chart from "~/components/expenses/Chart";
import ExpenseStatistics, {
  Expense,
} from "~/components/expenses/ExpenseStatistics";

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

export default function ExpensesAnalysis() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
