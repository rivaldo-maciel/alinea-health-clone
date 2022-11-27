import styled from 'styled-components';
import { Devices } from '../../devices';

export const Container = styled.section<{ devices: Devices }>`
  height: 62.5rem;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 2rem;
    color: #4F215A;
    margin-top: 4rem;
    align-self: center;
  }

  & .what-we-do-img {
    align-self: center;
    width: 22rem;
    margin-top: 5.5rem;
  }

  & .p-1 {
    color: #000;
    opacity: 0.7;
    margin-top: 3rem;
    font-size: 1.2rem;
  }

  & ul {
    color: #25373f;
    opacity: 0.7;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    list-style: none;
  }

  & ul li {
    margin-top: 0.5rem;
  }

  & .p-2 {
    color: #000;
    opacity: 0.7;
    margin-top: 2rem;
    font-size: 1.2rem;
  }

  @media ${ props => props.devices.tablet } {
    & {
      padding: 0 20px 0 20px;
    }

    & h2:nth-child(1) {
      font-size: 3rem;
    }

    & .what-we-do-img {
      width: 30rem;
    }

    & h2:nth-child(3) {
      font-size: 2.5rem;
      align-self: flex-start;
    }
  }

  @media ${ props => props.devices.desktop } {
    & {
      height: 40rem;
    }

    & .image-texts-container {
      display: flex;
      flex-direction: row-reverse;
    }
  }

  @media ${ props => props.devices.desktop_l } {
    align-items: center;
  }
`