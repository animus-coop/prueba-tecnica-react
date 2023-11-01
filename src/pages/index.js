import BasePage from '@/components/BasePage'
import Content from '@/components/Content'
import MainContainer from '@/components/MainContainer'
import SideBar from '@/components/SideBar'
import ToDoItem from '@/components/ToDoItem'
import todos from '@/data/todos.json'



export default function Home() {
  return  <BasePage title='ToDos List'>
    <MainContainer>
      <SideBar showAddButton title={'Daily Tasks'} />
      <Content>
        {todos.sort(todo=> new Date(todo.createdAt)).map((todo) => <ToDoItem emoji={todo.emoji} title={todo.title} isDone={todo.isDone} id={todo.id} key={todo.id} /> )}
      </Content>
    </MainContainer>
  </BasePage>
}