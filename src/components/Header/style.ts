import styled from 'styled-components';
import { Devices } from '../../devices';

export const Container = styled.header<{ devices: Devices }>`
  background-color: #fff;
  box-shadow: 0 12px 34px -11px rgb(65 62 101 / 10%);
  height: 6.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  position: fixed;
  z-index: 1;
  top: 0;

  & .logo {
    width: 15rem;
  }

  & button {
    display: none;
  }

  & .button-menu-container {
    display: flex;
  }

  & ul {
    display: none;
  }

  @media ${ props => props.devices.tablet } {
    & button {
      display: block;
      border: 1px solid rgba(29, 36, 58, 0.4);
      border-radius: 15px;
      height: 2.5rem;
      margin-right: 1.5rem;
      color: #322935;
    }

    & button:hover {
      background-color: #4F215A;
      color: #fff;
      transition: all 0.6s ease;
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
    & {
      padding: 0 30px 0 30px;
    }

    & ul {
      margin-left: 10rem;
      margin-right: 10rem;
    }

    & ul li {
      width: 15rem;
    }
  } 
`