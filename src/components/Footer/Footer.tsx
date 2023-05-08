import React from 'react';
import { FooterBase } from './footer.style';

const Footer = () => {
  return (
    <FooterBase>
      <p>Feito com dedicação por <a target='_blank' href='https://www.linkedin.com/in/gabrisouzza/'>Gabriel Pinheiro</a></p>
      <p>
        Dados retirados de maneira dinamica do site <a href="https://themoviedb.org" target='_blank'>Themoviedb.org</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
