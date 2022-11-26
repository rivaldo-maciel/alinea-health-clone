import { Container } from './style'
import logo from '../../assets/colorful-logo.svg';
import { CgMenu } from 'react-icons/cg';

const Header = () => {
  return (
    <Container>
      <img
        src={logo}
        alt="alinea health logo"
        className="logo"
      />
      <CgMenu size="30" />
    </Container>
  )
}

export default Header;