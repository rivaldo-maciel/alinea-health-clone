import styled from 'styled-components';

export const Container = styled.section`
  height: 48rem;
  background-color: #4F215A;
  display: flex;
  flex-direction: column;
  padding: 0 10px 0 10px;

  & .img-1 {
    width: 22rem;
    align-self: center;
    margin-top: 4rem;
  }

  & h2 {
    font-size: 2.2rem;
    color: #fff;
    margin-top: 2rem;
  }

  & p {
    color: #fff;
    font-size: 1.25rem;
    margin-top: 2rem;
    opacity: 0.7;
  }
`