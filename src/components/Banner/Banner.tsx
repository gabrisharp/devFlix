import iTvInfo from "../../types/tvInfo";
import Button from '../Button';
import {
  BannerArea,
  BannerDescription,
  BannerDetails,
  BannerGenres,
  BannerInfo,
  BannerPoints,
  BannerSeasons,
  BannerTitle,
  BannerYear
} from './banner.style';

interface Prop {
  item: iTvInfo;
}

const URLPATH = 'http://image.tmdb.org/t/p/original';

function checarData(data: any): boolean {
  if (isNaN(Date.parse(data))) return false;
  return true;
}

const Banner = ({ item }: Prop) => {
  const date = item.first_air_date;
  const year = checarData(date) ? new Date(date).getFullYear() : '-';
  const genres = item.genres.map(i => i.name)

  return (
    <BannerArea url={`${URLPATH}${item.backdrop_path}`} positionX='10vw'>
      <div className="verticalEffect">
        <BannerInfo className="horizontalEffect">
          <BannerTitle>{item.name}</BannerTitle>
          <BannerDetails>
            <BannerPoints>{item.vote_average.toFixed(1)} pontos</BannerPoints>
            <BannerYear>{year}</BannerYear>
            <BannerSeasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</BannerSeasons>
          </BannerDetails>
          <BannerDescription>
            {
              //cut text to not overflow
              item.overview.length > 500 ?
                item.overview.substring(0, 500) + '...' :
                item.overview
            }
          </BannerDescription>
          <div className="buttonsContainer">
            <Button
              href={`/watch/${item.id}`}
              background="#fff"
              color="#000">
              ► Assistir
            </Button>
            <Button
              href={`/list/add/${item.id}`}
              background="#333">
              + Minha Lista
            </Button>
          </div>
          <BannerGenres>
            {item.genres.length > 1 ? <strong>Gênero: </strong> :
              <strong>Gênero: </strong>}
            {genres.join(', ')}
          </BannerGenres>
        </BannerInfo>
      </div>
    </BannerArea>
  )
}

export default Banner;

/* 
<Title>
  {item.name}
</Title> 
*/