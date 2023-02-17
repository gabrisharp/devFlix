import './App.css'
import Tmdb from './api';
import {useEffect, useState} from 'react';
import iMovieCategory from './types/movieCategory';

import Menu from './components/Menu';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import iMovie from './types/movie';
import iTvInfo from './types/tvInfo';

function App() {

  const [movieList, setMovieList] = useState<iMovieCategory[]>([])
  const [bannerData, setBannerData] = useState<iTvInfo>();


  useEffect(()=>{
    (async function(){
      //geting list
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      //Filme em Banner
      let originals = list.filter( i => i.slug === 'netflix originals');
      let randomMovie = randonChosen(originals[0]);
      let bannerInfo = await Tmdb.getMovieInfo(randomMovie.id, `tv`);
      setBannerData(bannerInfo);
    })();
  },[])

  return (
    <div className="App">
      <Menu />
      {bannerData &&
        <Banner item={bannerData}/>
      }
      {/* Movie List */
        movieList.map((group, index)=>(
          <Carousel key={index} category={group}/>
        ))
      }
      {/* Footer */}
    </div>
  )
}

function randonChosen(movies: iMovieCategory):iMovie{
  let max = movies.items.results.length
  let random = Math.floor(Math.random() * max - 1);
  return movies.items.results[random];
}

export default App