import styled from 'styled-components';


type image = {
  size?: string,
  positionX?: string,
  url: string
}

export const BannerArea = styled.section<image>`
  height: 80vh;
  background-size: ${props => props.size? props.size: 'cover'};
  background-position: ${props => props.positionX? props.positionX: '25vw'};
  background-image: url(${props=> props.url});
  //Transparencia vertical
  &::after{
    content: 'invisible';
    color: transparent;
    display: inline-block;

    height: 100%;
    width: 100%;
    position: relative;
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
`;

export const VerticalEffect = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient();
`;

export const Title = styled.h2`
`;