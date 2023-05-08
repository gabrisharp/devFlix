import { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './api';
import iMovieCategory from './types/movieCategory';

import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Menu from './components/Menu';
import iMovie from './types/movie';
import iTvInfo from './types/tvInfo';

function App() {

  const [movieList, setMovieList] = useState<iMovieCategory[]>([])
  const [bannerData, setBannerData] = useState<iTvInfo>();


  useEffect(() => {
    (async function () {
      //geting list
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      //Filme em Banner
      let collection = list.filter(i => i.slug === 'trending');
      let randomMovie = randonChosen(collection[0]);
      let bannerInfo = await Tmdb.getMovieInfo(randomMovie.id, `tv`);
      setBannerData(bannerInfo);
    })();
  }, []);



  return (
    <div className="App">
      <Menu />

      {bannerData &&
        <Banner item={bannerData} />
      }
      <div className="movie-list">
        {/* Movie List */
          movieList.map((group, index) => (
            <Carousel key={index} category={group} />
          ))
        }
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

function randonChosen(movies: iMovieCategory): iMovie {
  let max = movies.items.results.length
  let random = Math.floor(Math.random() * max - 1);
  return movies.items.results[random];
}

export default App