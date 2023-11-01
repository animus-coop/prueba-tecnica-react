import styles from '@/styles/ToDoCardStatus.module.css'

const ToDoCardStatus = ({done=false}) => {
  return <>
    <div className={styles.status}>
      <input type="checkbox" checked={done} />
    </div>
  </>
}

export default ToDoCardStatus