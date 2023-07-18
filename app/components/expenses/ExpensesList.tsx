import ExpenseListItem from "./ExpenseListItem";
import { Expense } from "./ExpenseStatistics";

interface Props {
  expenses: Expense[];
}

function ExpensesList({ expenses }: Props) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
