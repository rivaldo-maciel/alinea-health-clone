import { Container } from './style';
import src from '../../assets/figure-2.svg';
import { devices } from '../../devices';

const EmployeeSupport = () => {
  return (
    <Container devices={devices}>
      <img className="img-1" src={src} alt="means of employee support" data-aos="fade-right"/>
      <div className="texts-container" data-aos="fade-left">
        <h2>
          Suporte para o colaborador em todos os momentos, em um lugar só.
        </h2>
        <p>
          Através do nosso app, uma equipe de especialistas fica disponível para
          tirar dúvidas, realizar triagem e auxiliar sempre que necessário.
        </p>
      </div>
    </Container>
  );
};

export default EmployeeSupport;
