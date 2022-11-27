import styled from 'styled-components';
import { Devices } from '../../devices';

export const Container = styled.nav<{ isVisible: boolean, devices: Devices }>`
  height: 100vh;
  width: 20rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: ${ props => props.isVisible ? '0 0 0 10000px rgba(0,0,0,.50)' : 'none' };
  margin-left: ${ props => props.isVisible ? '0' : '-20rem' };
  transition: all 0.5s ease;

  & .button-close-container {
    height: 3.2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-end;
  }

  & .button-close-content {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & ul li {
    height: 3.2rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  & ul li a {
    text-decoration: none;
    color: #000;
    font-weight: bolder;
    margin-left: 1rem;
    width: 100%;
    font-size: 1.2rem;
  }

  @media ${ props => props.devices.tablet } {
    & {
      width: 40rem;
      margin-left: ${ props => props.isVisible ? '0' : '-40rem' };
    }
  }
`