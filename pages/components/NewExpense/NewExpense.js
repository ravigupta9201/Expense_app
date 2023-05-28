import ExpenseForm from "./ExpenseForm"
import styles from "../../../styles/components/NewExpense/NewExpense.module.css"

const NewExpense = (props) => {

    const receiveExpenseDataHandler =(receiveExpenseData)=>{

      const expenseData = {
        ...receiveExpenseData, 
        id: Math.random().toString()
      }
      console.log(expenseData)

      props.onAddExpenseDataHandler(expenseData)
    }

  return (
    <div className={styles["new-expense"]}>
      <ExpenseForm onReceiveExpenseDataHandler = {receiveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
