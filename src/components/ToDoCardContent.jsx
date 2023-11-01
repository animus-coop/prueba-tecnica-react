import styles from '@/styles/ToDoCardContent.module.css'

const ToDoCardContent = ({name, createdAt}) => {
  return <>
      <div className={styles.content}>
        <p>{name}</p>
        <p>{createdAt}</p>
      </div>
  </>
}

export default ToDoCardContent