import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CheckboxView from "expo-checkbox";
import { Platform } from "react-native";
import { Form } from "@unform/mobile";
import styles from "../../styles";

const IOS = "ios";
const PADDING = "padding";
const HEIGHT = "height";

export const Content = styled(KeyboardAwareScrollView).attrs({
  behavior: Platform.OS === IOS ? PADDING : HEIGHT,
  keyboardVerticalOffset: Platform.OS === IOS ? 20 : 0,
})`
  background-color: ${styles.colors.light4};
  border-radius: 30px;
`;

export const Container = styled.View`
  background-color: ${styles.colors.primary};
  height: 100%;
  flex-direction: column;
`;

export const FormContainer = styled(Form)`
  align-self: center;
  width: 100%;
`;

export const Agreement = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  margin: 60px 0px 0px 0px;
`;

export const AgreementButton = styled.TouchableOpacity``;

export const Description = styled.Text`
  font-size: 12px;
  font-family: ${styles.fonts.light};
  margin-left: 10px;
  width: 40%;
`;

export const Checkbox = styled(CheckboxView).attrs({
  color: styles.colors.primary,
})`
  align-self: center;
`;

export const ButtonProfilePhoto = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
`;

export const TextProfile = styled.Text`
  margin-top: 10px;
  color: ${styles.colors.link};
`;

export const Icon = styled.View`
  margin-top: 30px;
  height: 80px;
  width: 80px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${styles.colors.primary};
`;

export const ImageSelect = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
