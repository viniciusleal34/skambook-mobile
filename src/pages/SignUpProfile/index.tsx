import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef, useState, useEffect } from "react";
import Input from "../../components/Input";
import * as Yup from "yup";
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
  ImageSelect,
  ScrollView,
} from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputMasked from "../../components/InputMasked";
import styles from "../../styles";
import ModalSelectImage from "../../components/ModalSelectImage";
import { GlobalProps } from "../../interfaces/GlobalProps";
import { FormHandles } from "@unform/core";
import { Alert } from "react-native";
import getValidationErrors from "../../utils/getValidationError";

interface StepOneProps {
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUpProfile: React.FC<GlobalProps> = ({ navigation }) => {
  const [date, setDate] = useState();
  const formRef = useRef<FormHandles | any>(null);
  const [isSelected, setSelection] = useState(false);
  const [image, setImage] = useState<any>(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const nextStepSelectGenderAsync = useCallback(
    async (data: any) => {
      try {
        data.birth_date = date;
        formRef.current.setErrors({});
        console.log(data);
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome é obrigatorio"),
          birth_date: Yup.date().required("Data de nascimento obrigatoria"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        navigation.navigate("SignUpSelectGender");
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
    },
    [date]
  );

  return (
    <Container>
      <ModalSelectImage
        visible={modalVisible}
        setVisible={setModalVisible}
        setImage={setImage}
        image={image}
      />
      <StatusBar />
      <Header />
      <Content>
        <ScrollView>
          <ButtonProfilePhoto onPress={openModal}>
            <Icon>
              {image ? (
                <ImageSelect source={image} />
              ) : (
                <ProfileOutlited
                  height={50}
                  width={50}
                  fill={styles.colors.light4}
                />
              )}
            </Icon>
            <TextProfile>Adicionar foto de perfil</TextProfile>
          </ButtonProfilePhoto>
          <FormContainer ref={formRef} onSubmit={nextStepSelectGenderAsync}>
            <Input
              name="name"
              placeholder="Nome completo"
              label="Nome completo"
              icon={ProfileOutlited}
            />
            <InputMasked
              name="birth_date"
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
          <Button
            title="Continuar"
            icon={ArrowFoward}
            onPress={() => formRef.current?.submitForm()}
          />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default SignUpProfile;
