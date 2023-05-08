import { ReactNode } from "react";
import {Button as StyleButton} from './button.style';

interface Props{
  children: ReactNode,
  href?: string,
  handleClick?: () => void,

  background?: string,
  color?: string,
}

const Button: React.FC<Props> = (Props) =>{
  
  return(
    <StyleButton onClick={Props.handleClick} href={Props.href} 
    background={Props.background} color={Props.color}>
      {Props.children}
    </StyleButton>
  )
}

export default Button;