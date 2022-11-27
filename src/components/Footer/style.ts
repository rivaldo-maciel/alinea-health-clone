import styled from 'styled-components';

export const Container = styled.footer`
  height: 22rem;
  display: flex;
  flex-direction: column;

  & .logo-footer {
    width: 18rem;
    align-self: center;
    margin-top: 2rem;
  }

  & ul {
    align-self: center;
    list-style: none;
    text-align: center;
    margin-top: 2.5rem;
  }

  & ul li {
    margin-top: 0.5rem;
  }

  & ul a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #4F215A;
  }
`