import iTvInfo from "../../types/tvInfo";
import {BannerArea, Title, VerticalEffect} from './banner.style'

interface Prop{
  item: iTvInfo;
}

const URLPATH = 'http://image.tmdb.org/t/p/original';

const Banner = ({item}: Prop) =>{
  return(
    <BannerArea url={`${URLPATH}${item.backdrop_path}`} positionX='30vw'>
      
     
    </BannerArea>
  )
}

export default Banner;

/* 
<Title>
  {item.name}
</Title> 
*/