import logo from '../../assets/img/logo.png';
import style from './style.module.css';

const Menu = () =>{

  return(
    <nav className={style.menu}>
      <a href="">
        <img className={style.logo} src={logo} alt="logo-dev-flix"/>
      </a>
    </nav>
  )
}

export default Menu;