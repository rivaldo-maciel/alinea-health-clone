import { Container } from './style'
import logo from '../../assets/colorful-logo.svg';
import { CgMenu } from 'react-icons/cg';
import { useContext } from 'react';
import { menuContext } from '../../context/menuContext';
import { devices } from '../../devices';
import SchedulingBtn from '../SchedulingBtn';
import { Link } from 'react-scroll';

const Header = () => {
  const { setIsVisible } = useContext(menuContext);
  return (
    <Container devices={devices}>
      <img
        src={logo}
        alt="alinea health logo"
        className="logo"
      />
      <ul>
        <li>
          <Link to="whatWeDo" smooth={true} onClick={() => setIsVisible(false)}>
            O que fazemos?
          </Link>
        </li>
        <li>
          <Link to="howWeDo" smooth={true} onClick={() => setIsVisible(false)}>
            Como fazemos?
          </Link>
        </li>
      </ul>
      <div className="button-menu-container">
        <SchedulingBtn
          width="16rem"
          background="#fff"
          color="#000"
        >
          Agendar uma demonstração
        </SchedulingBtn>
        <CgMenu className="menu-icon" size="30" onClick={() => setIsVisible(true)}/>
      </div>
    </Container>
  )
}

export default Header;