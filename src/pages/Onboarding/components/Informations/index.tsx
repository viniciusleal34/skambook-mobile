import React from "react";

import { Container, Title, SubTitle, Line } from "./styles";

interface InfoProps {
  item: itemProps;
}

interface itemProps {
  key: string;
  title: string;
  title1: string;
  text: string;
  left: number;
}

const Informations: React.FC<InfoProps> = ({ item }: InfoProps) => {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Title>{item.title1}</Title>
      <Line left={item.left} />
      <SubTitle>{item.text}</SubTitle>
    </Container>
  );
};

export default Informations;
