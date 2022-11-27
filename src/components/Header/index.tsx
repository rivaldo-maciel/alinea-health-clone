import { Container } from './style'
import logo from '../../assets/colorful-logo.svg';
import { CgMenu } from 'react-icons/cg';
import { useContext } from 'react';
import { menuContext } from '../../context/menuContext';
import { devices } from '../../devices';
import SchedulingBtn from '../SchedulingBtn';

const Header = () => {
  const { setIsVisible } = useContext(menuContext);
  return (
    <Container devices={devices}>
      <img
        src={logo}
        alt="alinea health logo"
        className="logo"
      />
      <div className="button-menu-container">
        <SchedulingBtn
          width="16rem"
          background="#fff"
          color="#000"
        >
          Agendar uma demonstração
        </SchedulingBtn>
        <CgMenu size="30" onClick={() => setIsVisible(true)}/>
      </div>
    </Container>
  )
}

export default Header;