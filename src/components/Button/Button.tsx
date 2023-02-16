import { ReactNode } from "react";
// import style from './button.module.css'; currently comes from the father

interface Props{
  children: ReactNode,
  href?: string,
  handleClick?: () => void,
  class: string,
}

const Button: React.FC<Props> = (Props) =>{
  
  return(
    <a className={Props.class} href={Props.href} onClick={Props.handleClick}>
      {Props.children}
    </a>
  )
}

export default Button;