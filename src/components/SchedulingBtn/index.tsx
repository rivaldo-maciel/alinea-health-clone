import { Container } from './style';

type props = {
  children: React.ReactNode;
  width: string;
}

const SchedulingBtn = ({ children, width }: props) => {
  return (
    <Container width={width}>
      {
        children
      }
    </Container>
  )
}

export default SchedulingBtn;