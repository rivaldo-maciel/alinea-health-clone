import styled from 'styled-components';
import { Devices } from '../../devices';

export const Container = styled.header<{ devices: Devices }>`
  background-color: #fff;
  height: 6.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  position: absolute;

  & .logo {
    width: 15rem;
  }

  & button {
    display: none;
  }

  & .button-menu-container {
    display: flex;
  }

  @media ${ props => props.devices.tablet } {
    & button {
      display: block;
      border: 1px solid rgba(29, 36, 58, 0.4);
      border-radius: 15px;
      height: 2.5rem;
      margin-right: 1.5rem;
    }

    & {
      padding: 0 25px 0 25px;
    }
  }

  @media ${ props => props.devices.desktop } {
    & {
      justify-content: space-evenly;
      padding: 0 5px 0 5px;
    }

    & .menu-icon {
      display: none;
    }

    & ul {
      display: flex;
      list-style: none;
      justify-content: center;
    }

    & ul li {
      color: #4F215A;
      font-size: 1.2rem;
      font-weight: bold;
      width: 10rem;
      cursor: pointer;
    }
  }

  @media ${ props => props.devices.desktop_l } {
    & ul {
      margin-left: 15rem;
      margin-right: 15rem;
    }

    & ul li {
      width: 15rem;
    }
  } 
`