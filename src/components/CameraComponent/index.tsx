import { Camera, CameraType, CameraProps } from "expo-camera";
import React, { useCallback, useRef, useState } from "react";
import {
  CameraOutlined,
  SwitchCameraOutlined,
  CloseOutlined,
} from "../../assets/icons";
import styles from "../../styles";

import {
  Container,
  Content,
  ButtonTurnCamera,
  ButtonPicture,
  ButtonClose,
  Footer,
  ContainerSaveImage,
  Button,
  ButtonText,
} from "./styles";

interface CameraComponentProps {
  setVisibleCamera: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<any>;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CameraComponent: React.FC<CameraComponentProps> = ({
  setVisibleCamera,
  setImage,
  setVisibleModal,
}) => {
  const [type, setType] = useState(CameraType.back);
  const [stop, setStop] = useState(false);
  const camRef = useRef<CameraProps | any>(null);

  const closeCamera = useCallback(() => {
    setVisibleCamera(false);
  }, []);

  const swapCamera = useCallback(() => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }, [type]);

  const StopCam = useCallback(() => {
    try {
      if (!stop) {
        camRef.current.pausePreview();
        setStop(true);
        return true;
      }
      camRef.current.resumePreview();
      setStop(false);
    } catch (err) {
      return err;
    }
  }, [stop]);

  const takePicture = async () => {
    try {
      if (camRef?.current) {
        const data = await camRef.current.takePictureAsync();
        setImage(data);
        setVisibleModal(false);
        setVisibleCamera(false);
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <Container ref={camRef} type={type}>
      <Content>
        <ButtonClose onPress={closeCamera}>
          <CloseOutlined width={35} height={35} fill={styles.colors.light4} />
        </ButtonClose>
        {stop ? (
          <ContainerSaveImage>
            <Button onPress={takePicture}>
              <ButtonText>Salvar</ButtonText>
            </Button>
            <Button onPress={StopCam}>
              <ButtonText>Cancelar</ButtonText>
            </Button>
          </ContainerSaveImage>
        ) : (
          <Footer>
            <ButtonPicture onPress={StopCam} />
            <ButtonTurnCamera onPress={swapCamera}>
              <SwitchCameraOutlined height={35} width={35} fill="#fff" />
            </ButtonTurnCamera>
          </Footer>
        )}
      </Content>
    </Container>
  );
};

export default CameraComponent;
