import { Camera } from "expo-camera";
import styled from "styled-components/native";
import styles from "../../styles";

export const Container = styled(Camera)`
  height: 100%;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 10px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ButtonPicture = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  right: 110%;
  border: 5px solid ${styles.colors.light4};
`;

export const ButtonTurnCamera = styled.TouchableOpacity`
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${styles.colors.dark1};
`;

export const ButtonClose = styled.TouchableOpacity``;

export const ContainerSaveImage = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  width: 92%;
  flex-direction: row;
  height: 60px;
  border-radius: 10px;
  margin-top: 16px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${styles.colors.light4};
`;

export const ButtonText = styled.Text`
  color: ${styles.colors.dark4};
  font-size: 16px;
  font-family: ${styles.fonts.light};
`;
