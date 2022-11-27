import styled from 'styled-components';

export const Container = styled.section`
  height: 28rem;
  background-color: #4F215A;
  display: flex;
  flex-direction: column;

  & h2 {
    color: #fff;
    font-size: 2.5rem;
    align-self: center;
    text-align: center;
    width: 23rem;
    margin-top: 3.5rem;
  }

  & span {
    color: #FE9D7B;
  }

  & button {
    align-self: center;
    margin-top: 2rem;
  }
`