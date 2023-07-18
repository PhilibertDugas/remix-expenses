import { useMemo } from "react";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
}

interface Props {
  expenses: Expense[];
}

function calculateSummaryStatistics(expenses: Expense[]) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}

function ExpenseStatistics({ expenses }: Props) {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );

  return (
    <section>
      <h2 className="font-bold text-blue-200 text-lg">Summary Statistics</h2>
      <dl className="grid grid-cols-2 grid-rows-2 gap-8">
        <div>
          <dt className="text-blue-200">Total</dt>
          <dd className="text-white">${sum.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-blue-200">Average</dt>
          <dd className="text-white">${mean.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-blue-200"> Min. Amount</dt>
          <dd className="text-white">${minAmount.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-blue-200">Max. Amount</dt>
          <dd className="text-white">${maxAmount.toFixed(2)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default ExpenseStatistics;
