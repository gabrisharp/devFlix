import logo from '../../assets/img/logo.png';
import {ButtonLink, Logo, Menu as MenuWrapper} from './style';

const Menu = () =>{

  return(
    <MenuWrapper>
      <a href="">
        <Logo src={logo} alt="logo-dev-flix"/>
      </a>

      <ButtonLink as='a' href='/'>
        Novo Vídeo
      </ButtonLink>
    </MenuWrapper>
  )
}

export default Menu;