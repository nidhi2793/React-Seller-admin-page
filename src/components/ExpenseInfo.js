import "./ExpenseInfo.css";

function ExpenseInfo({ expense, onDelete }) {
  const handleClick = () => {
    onDelete(expense.id);
  };
  return (
    <div>
      {expense.sellingPrice} - {expense.productName}
      <button onClick={handleClick}>Delete Product</button>
    </div>
  );
}

export default ExpenseInfo;
