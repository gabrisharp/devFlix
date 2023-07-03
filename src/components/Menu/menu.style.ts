import styled from 'styled-components';

import Button from "../Button";

interface MenuProps {
  isScrooled?: boolean
}

export const Menu = styled.nav<MenuProps>`
  width: 100%;
  padding: 10px 5%;
  max-height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  inset: 0; //instead of top,left... 
  z-index: 999;

  border-bottom: 3px solid transparent;
  background-color: transparent;

  transition: all 0.5s ease-in-out;
  
  ${props => props.isScrooled && `
    background-color: var(--grayDark);
    border-bottom: 3px solid var(--primary);
    box-shadow: 0 1px 13px 3px var(--primary);
    max-height: 70px; 
    
    
  `}

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  max-width: 168px;
  @media (max-width: 800px){
    max-width: 105px;
  }
`;

export const ButtonLink = styled(Button)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;

  border: 1px solid #fff;
  border-radius: 3px;

  padding: 7px 20px;
  &:hover,
  &:focus{
    opacity: .7;
    transition: opacity 200ms;
  }
  @media (max-width: 850px){
    position: fixed;
    left:0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border:0;
    text-align: center;
  }

`;

export const UserButton = styled.img`
  max-width: 50px;
  border-radius: 3px;
  @media (max-width: 800px){
    max-width: 40px;
  }
`;