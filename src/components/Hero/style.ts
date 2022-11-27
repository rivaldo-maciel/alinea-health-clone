import styled from 'styled-components';

export const Container = styled.section`
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
`