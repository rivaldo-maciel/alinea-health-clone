import { Container } from './style';
import src from '../../assets/figure-2.svg';

const EmployeeSupport = () => {
  return (
    <Container>
      <img className="img-1" src={src} alt="means of employee support" />
      <h2>Suporte para o colaborador em todos os momentos, em um lugar só.</h2>
      <p>
        Através do nosso app, uma equipe de especialistas fica disponível para
        tirar dúvidas, realizar triagem e auxiliar sempre que necessário.
      </p>
    </Container>
  );
};

export default EmployeeSupport;
