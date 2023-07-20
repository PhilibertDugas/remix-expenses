import ExpenseListItem from "./ExpenseListItem";

interface ExpensesDetails {
  id: string;
  title: string;
  amount: number;
}
interface Props {
  expenses: ExpensesDetails[];
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
