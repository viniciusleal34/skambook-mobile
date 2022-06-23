import React from "react";
import { Container, ButtonText } from "./styles";
import styles from "../../styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  select?: boolean;
  background?: string;
}

const Button: React.FC<ButtonProps | any> = ({
  title,
  icon: Icon,
  disabled,
  secondary,
  background,
  select,
  ...rest
}) => (
  <Container
    background={background}
    icon={Icon}
    disabled={disabled}
    select={select}
    secondary={secondary}
    {...rest}
  >
    <ButtonText secondary={secondary} select={select}>
      {title}
    </ButtonText>
    {Icon && (
      <Icon fill={secondary ? styles.colors.info : styles.colors.light4} />
    )}
  </Container>
);

export default Button;
