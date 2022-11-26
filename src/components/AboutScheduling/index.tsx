import { Container } from './style';
import src from '../../assets/figure-3.svg';

const AboutScheduling = () => {
  return (
    <Container>
      <h2>Agendamento simples e direto.</h2>
      <p>
        Realizar o agendamento de consultas e procedimentos é trabalhoso e
        chato. Nós devolvemos esse tempo para seus colaboradores.
      </p>
      <img
        className="march-calendar-img"
        src={src}
        alt="march calendar pic"
      />
    </Container>
  );
};

export default AboutScheduling;
