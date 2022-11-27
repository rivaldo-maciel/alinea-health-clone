import { Container } from './style'
import logo from '../../assets/colorful-logo.svg';
import { CgMenu } from 'react-icons/cg';
import { useContext } from 'react';
import { menuContext } from '../../context/menuContext';

const Header = () => {
  const { setIsVisible } = useContext(menuContext);
  return (
    <Container>
      <img
        src={logo}
        alt="alinea health logo"
        className="logo"
      />
      <CgMenu size="30" onClick={() => setIsVisible(true)}/>
    </Container>
  )
}

export default Header;