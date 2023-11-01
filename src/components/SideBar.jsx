import styles from '@/styles/SideBar.module.css'
import logo from '@/assets/animus-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SideBar = ({title, showAddButton=false}) => {
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={logo} alt="Animus Logo" style={{objectFit:'contain'}} fill />
      </div>
      <div className={styles.title}>{title}</div>
      {showAddButton && 
        <div className={styles.button} onClick={()=>{router.push('add-new-task')}}>
          <div className={styles.buttonIcon}>+</div>
          <div className={styles.buttonText}>Add new task</div>
        </div>      
      }
    </div>
  )
}

export default SideBar