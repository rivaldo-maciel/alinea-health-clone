import { Container } from './style';
import SchedulingBtn from '../../../SchedulingBtn';
import employeesImg from '../../../../assets/employees.svg';

const CardEmployee = () => {
  return (
    <Container>
      <img src={employeesImg} alt="employees icon" />
      <h4>Para os seus colaboradores</h4>
      <ul>
        <li>
          Recomendações dos melhores médicos dentro da rede credenciada,{' '}
          <strong>
            reduzindo diagnósticos incorretos e cirurgias contra-indicadas.
          </strong>
        </li>
        <li>
          <strong>Agendamento fácil e rápido</strong>, direto pelo app da Alinea
        </li>
        <li>
          <strong>Acesso 24/7 à nossa equipe de concierge</strong>, disponível
          para ajudar em cada etapa de sua jornada.
        </li>
      </ul>
      <SchedulingBtn
        width="12rem"
        background="#4F215A"
        color="#fff"
      >
        Agendar demonstração
      </SchedulingBtn>
    </Container>
  );
};

export default CardEmployee;
