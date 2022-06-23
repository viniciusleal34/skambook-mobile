import styled from "styled-components/native";
import Button from "../Button";

interface typeButton {}

export const Container = styled.View`
  max-height: 35%;
`;

export const FlatList = styled.FlatList.attrs({})``;

export const Item = styled(Button)`
  align-self: center;
  margin: 5px;
  width: auto;
  padding-horizontal: 30px;
`;
