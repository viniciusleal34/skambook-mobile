import styled from "styled-components/native";
import styles from "../../../../styles";

interface LineProps {
  left: number;
}

export const Container = styled.View`
  margin-top: 90px;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.regular};
  font-size: 32px;
  margin-left: 16px;
`;

export const Line = styled.View<LineProps>`
  position: relative;
  height: 4px;
  width: 140px;
  bottom: 2px;
  left: ${(props: LineProps) => props.left};
  align-self: center;
  /* border-radius: 100% 50%; */
  transform: skewY(-3deg);
  background-color: ${styles.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: ${styles.fonts.regular};
  color: ${styles.colors.dark2};
  line-height: 60px;
  margin: 40px 20px;
`;
