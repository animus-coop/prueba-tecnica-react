import BasePage from '@/components/BasePage'
import Content from '@/components/Content'
import MainContainer from '@/components/MainContainer'
import SideBar from '@/components/SideBar'
import { emojis } from '@/data/emojis'

import styles from '@/styles/AddNewTask.module.css'
import { useRouter } from 'next/router'


export default function AddNewTask() {

  const router = useRouter()


  return  <BasePage title='Add new task'>
    <MainContainer>
      <SideBar title={'Add new task'} />
      <Content>
        <div className={styles.formWrapper}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor='taskName'>Task name</label>
              <input id="taskName" type="text" placeholder="Task name" />

            </div>
            <div className={styles.field}>
              <label htmlFor='emoji'>Emoji</label>
              <select id="emoji">
                {emojis.map((emoji) => (
                  <option key={emoji}>{emoji}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={()=>{router.push('/')}} className={styles.cancel}>Cancel</button>
            <button className={styles.save}>Save</button>
          </div>
        </div>
      </Content>
    </MainContainer>
  </BasePage>
}