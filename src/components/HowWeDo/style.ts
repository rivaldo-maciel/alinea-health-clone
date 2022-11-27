import styled from 'styled-components';
import { Devices } from '../../devices';

export const Container = styled.section<{ devices: Devices }>`
  height: 114rem;
  display: flex;
  flex-direction: column;

  & .orange-content {
    height: 24.3rem;
    background-color: #FE9D7B;
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px;
  }

  & .orange-content h2 {
    font-size: 2rem;
    color: #fff;
    margin-top: 4rem;
    align-self: center;
  }

  & .orange-content p {
    font-size: 1.3rem;
    color: #fff;
    opacity: 0.7;
    width: 20rem;
    text-align: center;
    margin-top: 2rem;
    align-self: center;
  }

  & .cards-container {
    display: flex;
    flex-direction: column;
    margin-top: -3rem;
  }

  & small {
    width: 20rem;
    align-self: center;
    text-align: center;
    margin-top: 2rem;
    opacity: 0.9;
  }

  @media ${ props => props.devices.tablet } {
    & .orange-content h2 {
      font-size: 3rem;
    }

    & .orange-content p {
      width: 40rem;
      font-size: 2rem;
    }

    & small {
      font-size: 1.8rem;
      width: 40rem;
    }
  }
`