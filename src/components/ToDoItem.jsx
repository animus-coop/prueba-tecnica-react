import styles from '@/styles/ToDoItem.module.css'


const ToDoItem = ({isDone=false, emoji, title, id}) => {

  return <div className={`${styles.wrapper} ${isDone && styles.isDone}`}>
    <div className={styles.mainContent}>
      <div className={styles.toggle}>
        <input type="checkbox" checked={isDone} />
      </div>
      <div className={styles.emoji}>
        {emoji}
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
    <div className={styles.actions}>
      <button className={styles.delete}>🗑️</button>
    </div>
  </div>
}

export default ToDoItem