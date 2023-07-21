import ExpenseInfo from "./ExpenseInfo";

function ExpenseList({ expenses, onDelete }) {
  const renderedExpenses = expenses.map((expense) => {
    return (
      <div>
        <ul>
          <li>
            <ExpenseInfo
              key={expense.id}
              expense={expense}
              onDelete={onDelete}
            />
          </li>
        </ul>
      </div>
    );
  });
  return <div>{renderedExpenses}</div>;
}

export default ExpenseList;
