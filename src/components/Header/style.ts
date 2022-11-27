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
`