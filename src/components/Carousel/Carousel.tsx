import {useState, useEffect} from 'react';
import iMovieCategory from '../../types/movieCategory';
import {CardListArea, CardList, MovieGroupContainer, Card} from './carousel.style';

interface Prop{
  category: iMovieCategory
}

const Carousel = ({category}: Prop) =>{
  const movies = category.items.results;
  const urlPath = 'http://image.tmdb.org/t/p/w300';

  return(
    <MovieGroupContainer>
      
      <h2>{category.title}</h2>

      <CardListArea>
        <CardList>
          
          {movies.length > 0 && movies.map((item, key) => (
            <Card key={key}>
              <img src={`${urlPath}${item.poster_path}`} alt={`Filme: ${item.title}`} />
            </Card>
          ))}

        </CardList>
      </CardListArea>
    </MovieGroupContainer>
  )
} 

export default Carousel;