import styled from "styled-components";


export const Button = styled.button<{primary?: boolean}>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  border-radius: 40px;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  opacity: 0.8;
  transition: 0.3s;
  :focus {
            outline: none;
  }
  :hover {opacity: 1}
`;