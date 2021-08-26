import styled from "styled-components";

const button = styled.button`
  padding: 12px 16px;
  font-family: inherit;
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const PrimaryButton = styled(button)`
  colour: white;
  background: black;
`;

export const SecondaryButton = styled(button)`
  background: white;
  colour: black;
  border: 1px solid black;
`;
