import styles from '@/styles/MainContainer.module.css'

const MainContainer = ({children}) => {
  return <div className={styles.wrapper}>
    <div className={`${styles.container} ${styles.shadow}`}></div>
    <div className={styles.container}>{children}</div>
  </div>
  
}

export default MainContainer