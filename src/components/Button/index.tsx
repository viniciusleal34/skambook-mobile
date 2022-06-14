import React from "react";
import { Container, ButtonText } from "./styles";
import styles from "../../styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  background?: string;
}

const Button: React.FC<ButtonProps | any> = ({
  title,
  icon: Icon,
  disabled,
  secondary,
  background,
  ...rest
}) => (
  <Container
    background={background}
    icon={Icon}
    disabled={disabled}
    secondary={secondary}
    {...rest}
  >
    <ButtonText secondary={secondary}>{title}</ButtonText>
    {Icon && (
      <Icon fill={secondary ? styles.colors.info : styles.colors.light4} />
    )}
  </Container>
);

export default Button;
