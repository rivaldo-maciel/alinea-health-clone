import styled from 'styled-components';
import { Devices } from '../../devices';

export const Container = styled.section<{ devices: Devices }>`
  height: 28rem;
  background-color: #4F215A;
  display: flex;
  flex-direction: column;

  & h2 {
    color: #fff;
    font-size: 2.5rem;
    align-self: center;
    text-align: center;
    width: 23rem;
    margin-top: 3.5rem;
  }

  & span {
    color: #FE9D7B;
  }

  & button {
    align-self: center;
    margin-top: 2rem;
  }

  @media ${ props => props.devices.tablet } {
    & {
      margin-top: 2rem;
    }

    & h2 {
      width: 40rem;
      margin-top: 5rem;
    }

    & button:hover {
      background-color: #F18159;
      color: #fff;
      transition: all 0.6s ease;
    }
  }
`