import React, { useCallback, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import {
  Container,
  Content,
  Description,
  TextDescription,
  FormContainer,
  Title,
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { ProfileOutlited, ArrowFoward } from "../../assets/icons";
import getValidationErrors from "../../utils/getValidationError";
import { propsStack } from "../../routes/Stack/interface/StackProps";

export default function SingUp() {
  const navigation = useNavigation<propsStack>();

  const formRef = useRef<FormHandles | any>(null);
  const nextStepAsync = useCallback(async (data: any) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Deve ser um email valido")
          .required("O email é obrigatorio"),
        password: Yup.string()
          .required("Please enter your password")
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Senha deve seguir o padrão abaixo:"
          ),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], "Senhas divergentes")
          .required("Confirmação de senha obrigatorio"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      navigation.navigate("SignUpProfile");
    } catch (err) {
      console.log(err);

      if (err instanceof Yup.ValidationError) {
        const error = getValidationErrors(err);
        formRef.current.setErrors(error);

        return;
      }
      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, cheque as credenciais"
      );
    }
  }, []);

  return (
    <Container>
      <StatusBar />
      <Header />
      <Content>
        <Title>Vamos começar!</Title>
        <FormContainer ref={formRef} onSubmit={nextStepAsync}>
          <Input
            name="email"
            placeholder="E-mail"
            label="E-mail"
            icon={ProfileOutlited}
          />
          <Input
            name="password"
            password
            placeholder="Senha"
            label="Senha"
            autoComplete="off"
          />
          <Input
            name="passwordConfirmation"
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
        <Button
          title="Continuar"
          icon={ArrowFoward}
          onPress={() => formRef.current?.submitForm()}
        />
      </Content>
    </Container>
  );
}
