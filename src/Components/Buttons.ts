import styled from "styled-components";

const button = styled.button`
  padding: 12px 18px;
  font-family: inherit;
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const PrimaryButton = styled(button)`
  color: white;
  background: black;
`;

export const SecondaryButton = styled(button)`
  background: white;
  color: black;
  border: 2px solid black;
`;

export const TertiaryButton = styled(button)`
  background: white;
  color: black;
`;
