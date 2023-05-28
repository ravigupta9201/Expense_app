// import styles from "../../styles/components/ExpenseItem.module.css"
import styles from '../../../styles/components/Expenses/ExpenseItem.module.css'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const { title, amount} = props;

  const [newTitle, setNewTtle] = useState("")

  const changeHandler = (event)=>{
    setNewTtle(event.target.value)
  }

  const [ctitle, setCtitle] = useState(title)
 
  const clickHandler = ()=>{
    setCtitle(newTitle)
  }
  
  return (
    <Card className={styles["expense-item"]}>
      <ExpenseDate date = {props.date}/>
      <div className={styles["expense-item__description"]}>
        <h2> { ctitle } </h2>
        <div className={styles["expense-item__price"]}> $ { amount } </div>
        <input value={newTitle} onChange={changeHandler}/>
        <button onClick={clickHandler}>change</button>
      </div>
    </Card>
  )
}

export default ExpenseItem
