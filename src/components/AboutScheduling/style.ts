import styled from 'styled-components';
import { Devices } from '../../devices';

export const Container = styled.section<{ devices: Devices }>`
  height: 46rem;
  display: flex;
  flex-direction: column;
  padding: 0 10px 0 10px;

  & h2 {
    font-size: 2rem;
    color: #4F215A;
    margin-top: 4rem;
  }

  & p {
    color: #000;
    opacity: 0.7;
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  & .march-calendar-img {
    width: 23rem;
    margin-top: 1rem;
  }

  @media ${ props => props.devices.tablet } {
    & {
      padding: 0 30px 0 30px;
    }

    & .march-calendar-img {
      width: 30rem;
      align-self: center;
      margin-top: 3rem;
    }
  }
`