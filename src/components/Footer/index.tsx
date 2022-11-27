import { Container } from './style';
import logo from '../../assets/colorful-logo.svg';

const Footer = () => {
  return (
    <Container>
      <img className="logo-footer" src={logo} alt="alinea health logo" />
      <ul>
        <li><a href="">Imprensa</a></li>
        <li><a href="">Trabalhe Conosco</a></li>
        <li><a href="">Termos de uso</a></li>
        <li><a href="">Política de privacidade</a></li>
      </ul>
    </Container>
  )
}

export default Footer;