import { Container } from './style';
import CardCompany from './cards/CardCompany';
import CardEmployee from './cards/CardEmployee';
import { FaLock } from 'react-icons/fa';
import { devices } from '../../devices';

const HowWeDo = () => {
  return (
    <Container id="howWeDo" devices={devices}>
      <div className="orange-content">
        <h2>Como fazemos isso?</h2>
        <p>
          Nossa equipe de especialistas utiliza dados de sinistralidade,
          literatura médica e tecnologia para identificar os melhores médicos.
          <strong> Na prática, isso significa:</strong>
        </p>
      </div>
      <div className="cards-container">
        <CardEmployee />
        <CardCompany />
      </div>
      <small>
        <FaLock size={15} /> Mantemos a confidencialidade de seus colaboradores
        e não compartilhamos as informações médicas deles com a empresa
        contratante.
      </small>
    </Container>
  );
};

export default HowWeDo;
