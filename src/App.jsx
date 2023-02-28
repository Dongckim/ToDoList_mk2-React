import React from 'react'
import './App.css'
import HeaderInput from './component/HeaderInput'
import Main from './component/Main'
import Footer from './component/Footer'


function App() {
  return (
    <div>
      <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" style={{width : '300px', height : '100px'}}/>
    <div className='app-template'>
      <HeaderInput/>
      <Main/>
      <p className='border-bottom'></p>
      <Footer/>
    </div>
    </div>
    
  )
}

export default App;