import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useEffect, useState } from 'react';
import iMovieCategory from '../../types/movieCategory';
import { Card, CardList, CardListArea, MovieGroupContainer } from './carousel.style';

interface Prop {
  category: iMovieCategory
}

const Carousel = ({ category }: Prop) => {
  const movies = category.items.results;
  const urlPath = 'http://image.tmdb.org/t/p/w300';
  const CARD_SIZE = 200; //em pixeis

  const [listOffSet, setListOffSet] = useState<number>(0);

  const handleLeftArrow = () => {
    let offset = Math.round(window.innerWidth / 2);
    let scrollX = listOffSet + offset;
    if (scrollX > 0) scrollX = 0;

    setListOffSet(scrollX);
  }

  const handleRightArrow = () => {
    let offset = Math.round(window.innerWidth / 2);
    let listWidth = movies.length * CARD_SIZE;

    let scrollX = listOffSet - offset;
    if ((window.innerWidth - listWidth) > scrollX) {
      scrollX = (window.innerWidth - listWidth) - 60;
    }

    setListOffSet(scrollX);
  }

  return (
    <MovieGroupContainer>

      <h2>{category.title}</h2>

      <div className="listWrapper">
        <div className='movieRow--left' onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className='movieRow--right' onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>

        <CardListArea>
          <CardList scrollX={listOffSet} amount={movies.length} cardSize={CARD_SIZE}>

            {movies.length > 0 && movies.map((item, key) => (
              <Card key={key} cardSize={CARD_SIZE} >
                <img src={`${urlPath}${item.poster_path}`} alt={`Filme: ${item.title}`} />
              </Card>
            ))}

          </CardList>
        </CardListArea>
      </div>

    </MovieGroupContainer>
  )
}

export default Carousel;