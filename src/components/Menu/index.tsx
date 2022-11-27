import { Container } from './style';
import { GrFormClose } from 'react-icons/gr';
import { useContext } from 'react';
import { menuContext } from '../../context/menuContext';
import { Link } from 'react-scroll';

const Menu = () => {
  const { isVisible, setIsVisible } = useContext(menuContext);

  return (
    <Container isVisible={isVisible}>
      <div className="button-close-container">
        <div
          className="button-close-content"
          onClick={() => setIsVisible(false)}
        >
          <GrFormClose size="30" />
        </div>
      </div>
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
    </Container>
  );
};

export default Menu;
