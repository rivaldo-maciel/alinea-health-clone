import { Container } from './style';

type props = {
  children: React.ReactNode;
  width: string;
  background: string;
  color: string;
}

const SchedulingBtn = ({ children, width, background, color }: props) => {
  return (
    <Container
      width={width}
      background={background}
      color={color}
    >
      {
        children
      }
    </Container>
  )
}

export default SchedulingBtn;