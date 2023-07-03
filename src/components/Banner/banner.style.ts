import styled from 'styled-components';


type image = {
  size?: string,
  positionX?: string,
  url: string
}

export const BannerArea = styled.section<image>`
  height: 95vh;
  background-size: ${props => props.size ? props.size : 'cover'};
  background-position: ${props => props.positionX ? props.positionX : '25vw'};
  background-image: url(${props => props.url});

  color: var(--white);
  font-size: 14pt;

  .verticalEffect{
    height: inherit;
    width: 100%;
    background: linear-gradient(to top, var(--grayDark) 5%, transparent 75%);
  }
  .horizontalEffect{ 
    height: inherit;
    width: 100%;
    background: linear-gradient(to right, var(--grayDark) 25%, transparent 75%);
  }
  .buttonsContainer{
    padding: 20px 0;
    width: 325px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 760px){
    height: 90vh;
    font-size: 14px;
    background-position: center;
    .buttonsContainer{
      width: 275px;
    }
  }
`;

export const BannerInfo = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  padding-left: 5%;
  padding-bottom: 150px;
  padding-top: 70px;
  @media (max-width: 760px){
    padding-right: 5%;
  }
`;

export const BannerTitle = styled.h2`
  font-size: 60pt;
  font-weight: 700;

  @media (max-width: 760px){
    font-size: 35pt;
  }
`;

export const BannerDetails = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 20px;
  @media (max-width: 760px){
    font-size: 16px;
  }
`;
export const BannerPoints = styled.div`
  color: #4caf73;
`;

export const BannerYear = styled.div`
`;

export const BannerSeasons = styled.div`

`;

export const BannerDescription = styled.div`
  max-width: 600px;
  line-height: 25px;
  color: #cfcfcf;
  @media (max-width: 760px){
    max-width: 100%;
    margin-right: 30px;
    background-color: #0003;
    color: #dfdfdf;
  }
`;

export const BannerGenres = styled.div`
  color: #cfcfcf;
`;

/*
//Transparencia vertical
  &::after{
    content: 'invisible';
    color: transparent;
    display: inline-block;

    height: 100%;
    width: 100%;
    position: initial;
    top: 0%;
    z-index: 1;

    background: linear-gradient(to top, var(--grayDark) 5%, transparent 75%);
  }
  //Transparencia horizontal
  &::before{
    content: 'again';
    color: transparent;
    display: inline-block;
    width: 100%;
    height: inherit;
    position: absolute;
    background: linear-gradient(to right, var(--grayDark) 25%, transparent 75%);
  }  
*/