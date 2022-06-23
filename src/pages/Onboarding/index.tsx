import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ProfileOutlited, ArrowFoward, GoogleMore } from "../../assets/icons";
import { Container, Content, Slider } from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import styles from "../../styles";
import Informations from "./components/Informations";
import AppIntroSlider from "react-native-app-intro-slider";
import { propsStack } from "../../routes/Stack/interface/StackProps";

export default function Onboarding() {
  const navigation = useNavigation<propsStack>();
  const slides = [
    {
      key: "1",
      title: "Troque seus livros",
      title1: "usados facilmente!",
      text: "Encontre pessoas próximas a você com livros disponiveis para a troca.",
      left: 40,
    },
    {
      key: "2",
      title: "Faça mais que ler,",
      title1: "faça novos amigos!",
      text: "O legal da leitura é ter com quem compartilhar o mesmo vicio.",
      left: 70,
    },
    {
      key: "3",
      title: "Compartilhar é",
      title1: "sempre legal!",
      text: "Vamos formar a maior comunidade e compartilhamento de livros do Brasil!(ou quem sabe do mundo)",
      left: -10,
    },
  ];

  const signUpScreen = useCallback(() => {
    try {
      navigation.navigate("SignUp");
    } catch (err) {
      return err;
    }
  }, []);

  return (
    <Container>
      <StatusBar />
      <Header />
      <Content>
        <Slider>
          <AppIntroSlider
            dotStyle={{
              backgroundColor: "rgba(0, 213, 91,0.3)",
              bottom: 170,
            }}
            activeDotStyle={{
              backgroundColor: styles.colors.primary,
              bottom: 170,
              width: 50,
            }}
            showNextButton={false}
            renderItem={({ item }) => <Informations item={item} />}
            data={slides}
          />
        </Slider>
        <Button
          title="Criar minha conta"
          icon={ProfileOutlited}
          onPress={() => signUpScreen()}
        />
        <Button title="Já tenho minha conta" icon={ArrowFoward} secondary />
        <Button
          title="Usar uma conta Google"
          icon={GoogleMore}
          background={styles.colors.google}
        />
      </Content>
    </Container>
  );
}
