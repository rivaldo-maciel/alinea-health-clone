import { Container } from './style';
import heroImage from '../../assets/hero-image.png';
import SchedulingBtn from '../SchedulingBtn';

const Hero = () => {
  return (
    <Container>
      <img
        className="hero-image"
        src={heroImage}
        alt="two cell phones with alinea health application"
      />
      <h4>Maximize seu plano de saúde empresarial</h4>
      <h2>Reduza custos e otimize a assistência médica, <br/> sem trocar de plano.</h2>
      <SchedulingBtn>Agendar uma demonstração</SchedulingBtn>
    </Container>
  )
}

export default Hero;