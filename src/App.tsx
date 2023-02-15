import Menu from './components/menu';
import {useEffect, useState} from 'react';
import Tmdb from './api';
import './App.css'

function App() {

  useEffect(()=>{
    (async function(){
      console.log('rodando...')
      //geting list
      const list = await Tmdb.getHomeList();
      console.log(list);
    })();
  },[])

  return (
    <div className="App">
      <Menu />

    </div>
  )
}

export default App
