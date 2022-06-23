import styled from "styled-components/native";
import styles from "../../styles";

export const Content = styled.ScrollView`
  background-color: ${styles.colors.light4};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 100%;
`;

export const Container = styled.View`
  background-color: ${styles.colors.primary};
  height: 100%;
  flex-direction: column;
`;

export const Slider = styled.View`
  height: 270px;
`;
