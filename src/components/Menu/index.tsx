import { Container } from './style';
import { GrFormClose } from 'react-icons/gr';
import { useContext } from 'react';
import { menuContext } from '../../context/menuContext';

const Menu = () => {
  const { isVisible, setIsVisible } = useContext(menuContext);

  return (
    <Container isVisible={isVisible}>
      <div className="button-close-container">
        <div className="button-close-content" onClick={() => setIsVisible(false)}>
          <GrFormClose size="30"/>
        </div>
      </div>
      <ul>
        <li><a href="" onClick={() => setIsVisible(false)}>O que fazemos?</a></li>
        <li><a href="" onClick={() => setIsVisible(false)}>Como fazemos?</a></li>
      </ul>
    </Container>
  )
}

export default Menu;