import styled from "styled-components";

const Input = styled.input`
  height: 50px;
  font-family: inherit;
  font-size: 18px;
`;

export const SearchBar = styled(Input)`
  width: 60%;
  padding-left: 25px;
  border-radius: 50px;
  border: 2px solid #bababa;
`;

export const TextField = styled(Input)`
  border: 2px solid black;
  border-radius: 3px;
  padding: 10px;
`;
