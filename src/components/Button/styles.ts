import styled, { css } from "styled-components/native";
import styles from "../../styles";

interface DefaultProps {
  disabled?: boolean;
  icon?: boolean;
  select?: boolean;
  secondary?: boolean;
  background?: string;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<DefaultProps>`
  width: 92%;
  flex-direction: row;
  height: 60px;
  border-radius: 10px;
  margin-top: 16px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background || styles.colors.dark4};
  ${(props: DefaultProps) =>
    props.secondary &&
    css`
      background-color: transparent;
      border: 2px solid ${styles.colors.dark4};
    `}
  ${(props: DefaultProps) =>
    props.icon &&
    css`
      justify-content: space-between;
      padding: 0px 20px;
      width: 93%;
    `}
 ${(props: DefaultProps) =>
    props.select &&
    css`
      border: 2px solid ${styles.colors.primary};
      background-color: rgba(0, 213, 91, 0.3);
    `}
`;

export const ButtonText = styled.Text<DefaultProps>`
  color: ${styles.colors.light4};
  font-size: 16px;
  font-family: ${styles.fonts.light};
  ${(props: DefaultProps) =>
    props.secondary &&
    css`
      color: ${styles.colors.dark4};
      font-family: ${styles.fonts.regular};
    `}
  ${(props: DefaultProps) =>
    props.select &&
    css`
      color: ${styles.colors.primary};
      font-family: ${styles.fonts.regular};
      font-weight: bold;
    `}
`;
