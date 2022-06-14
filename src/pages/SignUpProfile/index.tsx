import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Input from "../../components/Input";
import { ProfileOutlited, ArrowFoward, DateRange } from "../../assets/icons";

import {
  Container,
  Content,
  Agreement,
  AgreementButton,
  Description,
  FormContainer,
  Checkbox,
  ButtonProfilePhoto,
  TextProfile,
  Icon,
} from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputMasked from "../../components/InputMasked";
import styles from "../../styles";

const SignUpProfile: React.FC = () => {
  const [date, setDate] = useState("");
  const [isSelected, setSelection] = useState(false);

  return (
    <Container>
      <StatusBar />
      <Header />
      <Content enabled>
        <ButtonProfilePhoto>
          <Icon>
            <ProfileOutlited
              height={50}
              width={50}
              fill={styles.colors.light4}
            />
          </Icon>
          <TextProfile>Adicionar foto de perfil</TextProfile>
        </ButtonProfilePhoto>
        <FormContainer onSubmit={(data) => console.log(data)}>
          <Input
            name="bbb"
            placeholder="E-mail"
            label="E-mail"
            icon={ProfileOutlited}
          />
          <InputMasked
            name="data_de_nascimento"
            rawText={date}
            setRawText={setDate}
            type="datetime"
            options={{
              format: "DD/MM/YYYY",
            }}
            label="Data de Nascimento"
            placeholder="Data de Nascimento"
            icon={DateRange}
          />
        </FormContainer>
        <Agreement>
          <Checkbox value={isSelected} onValueChange={setSelection} />
          <AgreementButton>
            <Description>
              Eu confirmo que li, entendi e concordo em vincular-me aos Termos
              de Uso e Políticas de Privacidades do aplicativo.
            </Description>
          </AgreementButton>
        </Agreement>
        <Button title="Continuar" icon={ArrowFoward} />
      </Content>
    </Container>
  );
};

export default SignUpProfile;
