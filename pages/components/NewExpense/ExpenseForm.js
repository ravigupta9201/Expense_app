import { useState } from "react";
import styles from "../../../styles/components/NewExpense/ExpenseForm.module.css"


const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  const titleChangeHandler = (event)=>{
    // console.log(event.target.value)
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandler = (event)=>{
    // console.log(event.target.value)
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event)=>{
    // console.log(event.target.value)
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event)=>{
    event.preventDefault();

    const expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate)
    }

    props.onReceiveExpenseDataHandler(expenseData)

    console.log(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          {/* <input type="text"  onChange={titleChangeHandler} /> */}
        </div>

        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          {/* <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler} /> */}
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>

        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
          {/* <input type="date"  onChange={dateChangeHandler} /> */}
        </div>
      </div>

      <div className={styles["new-expense__actions"]}>
          <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
