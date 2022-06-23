import styled, { css } from "styled-components/native";
import styles from "../../styles";

interface DefaultProps {
  isField?: boolean;
  isFocused?: boolean;
  isErrored?: boolean;
}

export const Container = styled.View<DefaultProps>`
  flex-direction: column;
  height: 50px;
  padding: 0px 15px;
  align-items: baseline;
  /* justify-content: baseline; */
  margin: 10px 0px;
  ${(props) =>
    props.isErrored &&
    css`
      margin-bottom: 20px;
    `}
`;

export const ContainerInput = styled.View<DefaultProps>`
  padding: 0px 5px;
  border-radius: 10px;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
  border-color: ${styles.colors.light1};
  border-width: 2px;
  margin-top: 20px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${styles.colors.error};
      border-width: 2px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-width: 2px;
      border-color: ${styles.colors.primary};
    `}
`;

export const TextInput = styled.TextInput.attrs<DefaultProps>({
  placeholderTextColor: styles.colors.light1,
  fontFamily: styles.fonts.regular,
})`
  flex: 1;
  height: 100%;
  font-family: ${styles.fonts.regular};
  font-size: 15px;
  color: ${styles.colors.info};
`;

export const Label = styled.Text<DefaultProps>`
  position: relative;
  padding: 0px 5px;
  top: 28px;
  left: 16px;
  z-index: 1000;
  color: transparent;
  ${(props) =>
    props.isErrored &&
    css`
      color: ${styles.colors.error};
      background-color: ${styles.colors.light4};
      font-family: ${styles.fonts.regular};
    `}
  ${(props) =>
    props.isField &&
    css`
      color: ${styles.colors.light1};
      background-color: ${styles.colors.light4};
      font-family: ${styles.fonts.regular};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${styles.colors.primary};
      background-color: ${styles.colors.light4};
      font-family: ${styles.fonts.regular};
    `}
`;

export const ErrorMessage = styled.Text``;
