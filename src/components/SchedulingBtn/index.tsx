import { Container } from './style';

type props = {
  children: React.ReactNode
}

const SchedulingBtn = ({ children }: props) => {
  return (
    <Container>
      {
        children
      }
    </Container>
  )
}

export default SchedulingBtn;