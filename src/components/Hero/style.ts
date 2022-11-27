import styled from 'styled-components';
import { Devices } from '../../devices';

export const Container = styled.section<{ devices: Devices }>`
  height: 62.5rem;
  background-color: #F28159;
  display: flex;
  flex-direction: column;
  padding: 0 10px 0 10px;

  & .hero-image {
    width: 23rem;
    margin-top: 14rem;
    align-self: center;
  }

  & h4 {
    font-size: 1.3rem;
    width: 20rem;
    color: #fff;
    margin-top: 8rem;
  }

  & h2 {
    font-size: 2rem;
    width: 20rem;
    color: #fff;
    margin-top: 3rem;
  }

  & button {
    margin-top: 2rem;
  }

  @media ${ props => props.devices.tablet } {
    & {
      padding: 0 20px 0 20px;
    }

    & .hero-image {
      width: 43.5rem;
      margin-top: 10rem;
    }

    & h4 {
      width: auto;
      font-size: 1.6rem;
      margin-top: 2rem;
    }

    & h2 {
      width: auto;
      font-size: 3rem;
    }
  }

  @media ${ props => props.devices.desktop } {
    & {
      flex-direction: row;
    }

    & .hero-image {
      width: 30rem;
      margin-top: 18rem;
      align-self: flex-start;
    }

    & .texts-button-container {
      margin-top: 12rem;
    }
  }

  @media ${ props => props.devices.desktop_l } {
    & {
      justify-content: center;
    }

    & .hero-image {
      width: 45rem;
      margin-top: 12rem;
    }

    & .texts-button-container {
      width: 40rem;
      margin-top: 10.5rem;
    }
  }
`