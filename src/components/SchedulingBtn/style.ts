import styled from 'styled-components';

export const Container = styled.button<{width: string, background: string, color: string}>`
  appearance: none;
  border: none;
  height: 3.5rem;
  width: ${ props => props.width };
  border-radius: 10px;
  background-color: ${ props => props.background };
  color: ${ props => props.color };
  font-size: 1rem;
  font-weight: bold;
`