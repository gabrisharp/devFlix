import styled from 'styled-components';

import Button from "../button";

export const Menu = styled.nav`
  width: 100%;
  padding: 10px 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top:0;
  left:0;
  right: 0;

  background-color: var(--black);
  border-bottom: 3px solid var(--primary);
  box-shadow: 0 1px 13px 3px var(--primary);  

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
