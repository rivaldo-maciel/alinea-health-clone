import styled from 'styled-components';

export const Container = styled.section`
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
`