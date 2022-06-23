import styled from "styled-components/native";
import styles from "../../styles";

export const Content = styled.View`
  background-color: ${styles.colors.light4};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 80%;
  align-items: center;
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
  align-self: flex-start;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: ${styles.fonts.medium};
  color: ${styles.colors.dark2};
  align-self: flex-start;
  margin: 20px 0px 10px 20px;
`;
