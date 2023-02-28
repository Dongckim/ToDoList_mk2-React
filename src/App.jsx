import React, { useState } from 'react'
import './App.css'
import HeaderInput from './component/HeaderInput'
import Main from './component/Main'
import Footer from './component/Footer'


function App() {
  return (
    <div>
      <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" style={{width : '200px', height : '70px'}}/>
      <div className='app-template'>
        <HeaderInput EntireFunction = {EntireFunction()}/>
        <Main/>
        <p className='border-bottom'></p>
        <Footer/>
      </div>
    </div>
  )
}

const EntireFunction = (props) => {
  const [todo, setTodo] = useState([
    { id: 1, content: '리팩토링 많이 해보기', isDone: 'false' },
    { id: 2, content: '리액트 빨리 끝내기', isDone: 'false' },
    { id: 3, content: '웹 개발 완벽하게 마무리하고 시작!', isDone: 'false' }
  ])

  const [content, setContent] = useState('');
  
  const dataObj = {todo, content};
  const funcObj = {setTodo, setContent};
  return {dataObj, funcObj}
}



export default App;