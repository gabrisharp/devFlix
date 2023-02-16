import styled from 'styled-components';

export const MovieGroupContainer = styled.div`
  margin-bottom: 30px;
  h2{
    margin-left: 30px;
  }
`;

export const CardListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`

export const CardList = styled.div`
  width: 7000px;
`

export const Card = styled.div`
  display: inline-block;
  width: 200px;
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