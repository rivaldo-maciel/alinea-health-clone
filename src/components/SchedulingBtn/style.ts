import styled from 'styled-components';

export const Container = styled.button<{width: string}>`
  appearance: none;
  border: none;
  height: 3.5rem;
  width: ${ props => props.width };
  border-radius: 10px;
  background-color: #4F215A;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
`