import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import Input from "../../components/Input";
import { ProfileOutlited, ArrowFoward } from "../../assets/icons";

import {
  Container,
  Content,
  Description,
  TextDescription,
  FormContainer,
  Title,
} from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { GlobalProps } from "../../interfaces/GlobalProps";

const SingUp: React.FC<GlobalProps> = ({ navigation }) => {
  const nextStepAsync = useCallback(() => {
    try {
      navigation.navigate("SignUpProfile");
    } catch (err) {
      console.log(err);
      return err;
    }
  }, []);

  return (
    <Container>
      <StatusBar />
      <Header />
      <Content enabled>
        <Title>Vamos começar!</Title>
        <FormContainer onSubmit={(data) => console.log(data)}>
          <Input
            name="email"
            placeholder="E-mail"
            label="E-mail"
            icon={ProfileOutlited}
          />
          <Input
            name="senha"
            password
            placeholder="Senha"
            label="Senha"
            autoComplete="off"
          />
          <Input
            name="confirm_senha"
            autoComplete="off"
            password
            placeholder="Confirme sua senha"
            label="Confirme sua senha"
          />
        </FormContainer>
        <Description>
          <TextDescription>Necessario que a senha contenha.</TextDescription>
          <TextDescription>
            • Pelo menos Letra maiuscula Pelo menos um número;
          </TextDescription>
          <TextDescription>• Pelo menos Letra maiuscula;</TextDescription>
          <TextDescription>• Pelo menos um caracter especial;</TextDescription>
        </Description>
        <Button title="Continuar" icon={ArrowFoward} onPress={nextStepAsync} />
      </Content>
    </Container>
  );
};

export default SingUp;
