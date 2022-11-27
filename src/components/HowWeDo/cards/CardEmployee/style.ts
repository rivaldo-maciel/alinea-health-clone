import styled from 'styled-components';
import { Devices } from '../../../../devices';

export const Container = styled.article<{ devices: Devices }>`
   & {
    height: 41rem;
    width: 23rem;
    border-radius: 20px;
    border: 1px solid rgba(29, 36, 58, 0.12);
    align-self: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & img {
    margin-top: 2rem;
  }

  & h4 {
    margin-top: 2rem;
    color: #4F215A;
    font-size: 1.5rem;
    width: 10rem;
    text-align: center;
  }

  & ul {
    width: 16rem;
    font-size: 1rem;
    opacity: 0.9;
    list-style-type: circle;
    margin-left: 2.5rem;
    margin-top: 1.5rem;
    color: #000;
    font-weight: 500;
  }

  & ul li {
    margin-top: 0.5rem;
  }

  & button {
    margin-top: 4rem;
  }
`