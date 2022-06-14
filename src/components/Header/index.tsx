import React from "react";
import { BackgroundArrow, BackgroundCircule } from "../../assets/icons";
import styles from "../../styles";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <BackgroundCircule fill={styles.colors.darker} />
      <BackgroundArrow fill={styles.colors.darker} width="230" />
    </Container>
  );
};

export default Header;
