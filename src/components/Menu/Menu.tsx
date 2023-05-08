import { FC, useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import userIcon from '../../assets/img/userIcon.png';

import { ButtonLink, Logo, Menu as MenuWrapper, UserButton } from './menu.style';


const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 200);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  return (
    <MenuWrapper isScrooled={isScrolled} >
      <a href="">
        <Logo src={logo} alt="logo-dev-flix" />
      </a>

      {/* 
      <ButtonLink as='a' href='/'>
        Novo Vídeo
      </ButtonLink>      
      */}

      <a href="">
        <UserButton src={userIcon} alt="user" />
      </a>

    </MenuWrapper>
  )
}

export default Menu;