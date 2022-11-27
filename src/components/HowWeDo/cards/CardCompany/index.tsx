import { Container } from './style';
import companyImg from '../../../../assets/company.svg';
import SchedulingBtn from '../../../SchedulingBtn';

const CardCompany = () => {
  return (
    <Container>
      <img src={companyImg} alt="company icon" />
      <h4>Para a sua empresa</h4>
      <ul>
        <li>Reduza custos de plano de saúde em 30%</li>
        <li>Reduza absenteísmo e fraudes</li>
        <li>Melhore o acesso à saúde</li>
        <li>Sem trocar de plano de saúde</li>
      </ul>
      <p>Se isso não acontecer, você recebe seu dinheiro de volta.</p>
      <b>Simples assim.</b>
      <SchedulingBtn
        width="12rem"
        background="#4F215A"
        color="#fff"
      >
        Agendar demonstração
      </SchedulingBtn>
    </Container>
  )
}

export default CardCompany;