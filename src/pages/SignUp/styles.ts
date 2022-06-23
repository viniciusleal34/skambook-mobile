import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Platform } from "react-native";
import { Form } from "@unform/mobile";
import styles from "../../styles";

const IOS = "ios";
const PADDING = "padding";
const HEIGHT = "height";

export const Content = styled(KeyboardAwareScrollView).attrs({
  behavior: Platform.OS === IOS ? PADDING : null,
  keyboardVerticalOffset: Platform.OS === IOS ? 20 : 0,
})`
  background-color: ${styles.colors.light4};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Container = styled.View`
  background-color: ${styles.colors.primary};
  height: 100%;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.regular};
  font-size: 32px;
  margin-top: 48px;
  margin-left: 16px;
`;

export const FormContainer = styled(Form)`
  align-self: center;
  width: 100%;
`;

export const Description = styled.View`
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const TextDescription = styled.Text`
  font-size: 10px;
  font-family: ${styles.fonts.light};
  margin-left: 20px;
  line-height: 14px;
`;
