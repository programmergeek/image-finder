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
  padding: 10px 18px;
`;

export const TertiaryButton = styled(button)`
  background: white;
  color: black;
`;

export const IconButton = styled(button)`
  border-radius: 30px;
  height: 40px;
  width: 40px;
  padding: 0;
  padding-top: 5px;
  border: 2px solid #bababa;
  background: white;
`;
