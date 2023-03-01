import React, { createContext, useState } from 'react'
import './App.css'
import HeaderInput from './component/HeaderInput'
import Main from './component/Main'
import Footer from './component/Footer'


export const TodoContext = createContext();

function App() {
  const [todo, setTodo] = useState([
  { id: 1, title : '리액트 실력 키우기!', content: '리팩토링 많이 해보기', isDone: false },
  { id: 2, title : '몸 만들기', content: '06시 기상 후 운동', isDone: true },
  { id: 3, title : '담날 컨디션 관리',content: '12시 전에 취침소등', isDone: false }]);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('')
  console.log(todo)
  return (
    <div>
      <TodoContext.Provider value={{ todo, setTodo, title, setTitle, content, setContent,}}>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt = '' style={{width : '200px', height : '70px'}}/>
        <div className='app-template'>
          <HeaderInput/>
            {
          todo.filter(item => item.isDone == false).map((item) => {
              return <Main key = {item.id} item = {item}/>
            })
          }
          <p className='border-bottom'></p>
            {
            todo.filter(item => item.isDone == true).map((item) => {
            return <Footer key = {item.id} item = {item}/>
            })
          }
        </div>
      </TodoContext.Provider>
    </div>
  )
}
export default App