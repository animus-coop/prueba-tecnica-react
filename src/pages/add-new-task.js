import BasePage from '@/components/BasePage'
import Content from '@/components/Content'
import MainContainer from '@/components/MainContainer'
import SideBar from '@/components/SideBar'
import { emojis } from '@/data/emojis'

import styles from '@/styles/AddNewTask.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'


export default function AddNewTask() {
  // form state
  const [title, setTitle] = useState('')
  const [emoji, setEmoji] = useState(1)


  const router = useRouter()


  return  <BasePage title='Add new task'>
    <MainContainer>
      <SideBar title={'Add new task'} />
      <Content>
        <div className={styles.formWrapper}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor='taskTitle'>Task title</label>
              <input id="taskTitle" type="text" placeholder="Task title" value={title} onChange={
                (e) => setTitle(e.target.value)
              } />

            </div>
            <div className={styles.field}>
              <label htmlFor='emoji'>Emoji</label>
              <select id="emoji" value={emoji} onChange={(e) => {setEmoji(e.target.value)}}>
                {emojis.map((emoji, index) => (
                  <option key={emoji} value={index}>{emoji}</option>
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