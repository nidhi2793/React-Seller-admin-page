import { useState, useEffect } from "react";
import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, SetExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const deleteExpenses = (id) => {
    const updatedExpenses = expenses.filter((expense) => {
      let deduction = expense.sellingPrice;
      setTotal(total - Number(deduction));
      return expense.id !== id;
    });

    SetExpenses(updatedExpenses);
  };

  const CreateExpense = (productID, sellingPrice, productName) => {
    const updatedExpenses = [
      ...expenses,
      {
        id: Math.round(Math.random() * 999),
        productID,
        sellingPrice,
        productName,
      },
    ];
    setTotal(total + Number(sellingPrice));
    SetExpenses(updatedExpenses);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  return (
    <div>
      <ExpenseInput onCreate={CreateExpense}></ExpenseInput>
      <h1>Products</h1>
      <ExpenseList expenses={expenses} onDelete={deleteExpenses} />
      <h1>Total value of worth the Products:Rs {total}</h1>
    </div>
  );
}

export default App;
