import { children } from 'react'
// import styles from '../../styles/components/UI/Card.module.css'
import styles from '../../../styles/components/UI/Card.module.css'

const Card = (props) => {
    const combinedClasses = `${styles.card} ${props.className}`;
  return (
    <div className={combinedClasses}>
      {props.children}
    </div>
  )
}

export default Card
