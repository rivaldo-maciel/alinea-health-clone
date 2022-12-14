import { Container } from './style';
import src from '../../assets/figure-1.svg';
import { devices } from '../../devices';

const WhatWeDo = () => {
  return (
    <Container id="whatWeDo" devices={devices}>
      <h2>O que fazemos?</h2>
      <div className="image-texts-container" data-aos="fade-left">
        <img
          className="what-we-do-img"
          alt="appointment card with a doctor"
          src={src}
        />
        <div className="texts-container" data-aos="fade-right">
          <h2>Reduzimos custos para a empresa</h2>
          <p className="p-1">
            Direcionamos seus colaboradores aos melhores prestadores dentro da
            sua rede, gerando:
          </p>
          <ul>
            <li>- Melhoria exponencial na qualidade da assistência médica</li>
            <li>- Redução de até 30% no seu custo em saúde</li>
            <li>- Redução em absenteísmo</li>
          </ul>
          <p className="p-2">
            <strong>Ou receba seu dinheiro de volta.</strong>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

