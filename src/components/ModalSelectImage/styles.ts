import styled from "styled-components/native";
import styles from "../../styles";

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 60px;
`;

export const ContainerButton = styled.View`
  width: 90%;
  border-radius: 10px;
  background-color: ${styles.colors.light4};
`;

export const ButtonOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 30px;
  border-top-width: 1px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: ${styles.fonts.regular};
`;

export const ButtonCancel = styled(ButtonOpacity).attrs({
  activeOpacity: 0.9,
})`
  margin-top: 30px;
  width: 90%;
  justify-content: center;
  background-color: ${styles.colors.light4};
  border-radius: 10px;
`;
