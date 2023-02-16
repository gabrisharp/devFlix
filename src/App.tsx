import './App.css'
import Tmdb from './api';
import {useEffect, useState} from 'react';
import iMovieCategory from './types/movieCategory';

import Menu from './components/menu';
import Carousel from './components/Carousel';

function App() {

  const [movieList, setMovieList] = useState<iMovieCategory[]>([])

  useEffect(()=>{
    (async function(){
      //geting list
      const list = await Tmdb.getHomeList();
      setMovieList(list);
    })();
  },[])

  return (
    <div className="App">
      <Menu />
      {/* Banner */}
      {/* Lists */
        movieList.map((group, index)=>(
          <Carousel key={index} category={group}/>
        ))
      }
      {/* Footer */}
    </div>
  )
}

export default App