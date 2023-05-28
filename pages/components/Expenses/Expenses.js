// import styles from "../../styles/components/Expenses.module.css"
import styles from '../../../styles/components/Expenses/Expenses.module.css'

import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"

const Expenses = (props) => {
  return (
    <Card className={styles.expenses}>

      {
        props.items.map(( expense )=>
          (
            <ExpenseItem key={expense.id}
              date = {expense.date}
              title = {expense.title}
              amount = {expense.amount}
            />
          )
        )
      }

      
    </Card>
  )
}

export default Expenses
