import React, { useState } from "react";
import About from "./About";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 230,
    date: new Date(2021, 2, 22),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 700,
    date: new Date(2021, 4, 2),
  },
  {
    id: "e4",
    title: "Food",
    amount: 540,
    date: new Date(2021, 5, 12),
  },
];

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:8000/user/expenses/get`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

const Home = ({ data }) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // {
  //   data.map((currElem) => {
  //     console.log(currElem);
  //     return <>setExpenses(currElem)</>;
  //   });
  // }

  const addExpenseDataHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
    console.log(updatedExpense);
  };

  return (
    <div>
      <h2>Expense App</h2>
      <NewExpense onAddExpenseDataHandler={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Home;
