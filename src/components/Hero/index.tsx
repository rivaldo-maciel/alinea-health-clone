import { Container } from './style';
import heroImage from '../../assets/hero-image.png';
import SchedulingBtn from '../SchedulingBtn';
import { devices } from '../../devices';

const Hero = () => {
  return (
    <Container devices={devices}>
      <img
        className="hero-image"
        src={heroImage}
        alt="two cell phones with alinea health application"
      />
      <div className="texts-button-container">
        <h4>Maximize seu plano de saúde empresarial</h4>
        <h2>
          Reduza custos e otimize a assistência médica, <br /> sem trocar de
          plano.
        </h2>
        <SchedulingBtn width="16rem" background="#4F215A" color="#fff">
          Agendar uma demonstração
        </SchedulingBtn>
      </div>
    </Container>
  );
};

export default Hero;
