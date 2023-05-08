import styled from 'styled-components';

interface Props{
  background?: string,
  color?: string,
}

export const Button = styled.a<Props>`
  text-decoration: none;
  color: ${props => props.color || '#fff'};
  font-weight: bold;
  font-size: 16pt;
  border: 1px solid ${props => props.background || '#fff'};

  background-color: ${props => props.background || 'transparent'};
  border-radius: 5px;

  padding: 10px 20px;
  &:hover,
  &:focus{
  opacity: .7;
  transition: opacity 200ms;
  }
  @media(max-width: 850px){
    a.buttonLink {
      position: fixed;
      left:0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border:0;
      text-align: center;
    }
}
`