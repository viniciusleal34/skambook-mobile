import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import Input from "../../components/Input";
import { ProfileOutlited, ArrowFoward, DateRange } from "../../assets/icons";
import { Container, Content, Title, SubTitle } from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import ContentAnimated from "../../components/ContentAnimated";
import GridList from "../../components/GridList";

const SignUpSelectGender: React.FC = () => {
  return (
    <Container>
      <StatusBar />
      <Header />
      <Content>
        <Title>Quais genêros você {"\n"}mais gosta?</Title>
        <SubTitle>Selecione 3(três) genêros</SubTitle>
        <GridList />
        <Button title="Continuar" icon={ArrowFoward} />
      </Content>
    </Container>
  );
};

export default SignUpSelectGender;
