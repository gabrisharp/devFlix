import styled from 'styled-components';

interface cardListProps {
  scrollX?: number;
  amount: number;
  cardSize: number;
}

interface cardProps {
  cardSize?: number;
}

export const MovieGroupContainer = styled.div`

  margin-bottom: 30px;
  h2{
    margin-left: 30px;
  }
  #hidden {
    display: none;
  }

  .listWrapper {
    display: flex;
  }

   .movieRow--right,
   .movieRow--left{
    position: absolute;
    align-self: center;
    display: flex;
    align-items: center;
    height: 270px;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
    opacity:0;

    transition: all 0.5s ease;

    background-color: #00000075;
  }
  .movieRow--right{
    right: 0;
  }
  .movieRow--left{
    left: 0;
  }

  &:hover .movieRow--right, 
  &:hover .movieRow--left{
    opacity: 1;
  }

  @media (max-width: 820px) {
    .movieRow--left, .movieRow--right{
      opacity: 1;
    }
  }

  @media (max-width: 760px) {
    .movieRow--right,
   .movieRow--left{
    height: 180px;
   }
  }
`;

export const CardListArea = styled.div`
  //display: flex;
  overflow-x: hidden;
  padding-left: 40px;
  
`

export const CardList = styled.div<cardListProps>`
  width: ${props => `${props.cardSize * props.amount}px`};
  display: flex;
  align-items: center; 
  margin-left: ${props => `${props.scrollX}px` || 0};

  transition: margin 0.5s ease-out;
`

export const Card = styled.div<cardProps>`
  display: inline-block;
  width: ${props => `${props.cardSize}px` || '200px'};
  cursor: pointer;

  img{
    width: 100%;    
    transform: scale(0.9);
    transition: all .2s ease;
  }
  img:hover{
    transform: scale(1);
  }
`;