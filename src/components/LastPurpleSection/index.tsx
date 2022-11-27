import { devices } from '../../devices';
import SchedulingBtn from '../SchedulingBtn';
import { Container } from './style';

const LastPurpleSection = () => {
  return (
    <Container devices={devices}>
      <h2>
        E aí, vamos <span>reduzir os custos</span> e <span>melhorar a qualidade</span> do seu plano
        empresarial?
      </h2>
      <SchedulingBtn
        width="16rem"
        background="#fff"
        color="#000"
      >
        Quero gendar demonstração
      </SchedulingBtn>
    </Container>
  );
};

export default LastPurpleSection;
