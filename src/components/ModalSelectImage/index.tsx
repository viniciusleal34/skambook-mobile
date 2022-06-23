import React, { useCallback, useState } from "react";
import { Modal } from "react-native";
import { PictureAlternate, TakeAPicture } from "../../assets/icons";
import styles from "../../styles";
import { pickImage, takeAPicture } from "../../utils/PickImageFunction";
import CameraComponent from "../CameraComponent";

import {
  Container,
  ButtonText,
  ButtonOpacity,
  ContainerButton,
  ButtonCancel,
} from "./styles";

interface ModalSelectProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<any>;
  image: any;
}

const ModalSelectImage: React.FC<ModalSelectProps> = ({
  visible,
  setVisible,
  setImage,
  image,
}) => {
  const [cameraOpen, setCameraOpen] = useState(false);
  const selectPicture = async () => {
    try {
      const imageResponse = await pickImage();
      setImage(imageResponse);
      setVisible(false);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const openCamera = useCallback(async () => {
    await takeAPicture();
    setCameraOpen(true);
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <Container>
        {cameraOpen ? (
          <CameraComponent
            setImage={setImage}
            setVisibleCamera={setCameraOpen}
            setVisibleModal={setVisible}
            image={image}
          />
        ) : (
          <>
            <ContainerButton>
              <ButtonOpacity style={{ borderTopWidth: 0 }} onPress={openCamera}>
                <ButtonText>Tirar Foto</ButtonText>
                <TakeAPicture fill={styles.colors.info} />
              </ButtonOpacity>
              <ButtonOpacity onPress={selectPicture}>
                <ButtonText>Escolher da Galeria</ButtonText>
                <PictureAlternate fill={styles.colors.info} />
              </ButtonOpacity>
            </ContainerButton>
            <ButtonCancel onPress={closeModal}>
              <ButtonText>Cancelar</ButtonText>
            </ButtonCancel>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default ModalSelectImage;
