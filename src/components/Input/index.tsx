import React, { useEffect, useRef, useState, useCallback } from "react";
import { Text, TouchableOpacity, TextInputProps } from "react-native";
import { useField } from "@unform/core";
import {
  Container,
  ContainerInput,
  TextInput,
  Label,
  ErrorMessage,
} from "./styles";
import styles from "../../styles";
import { EyeOffOutlined, EyeOutlined } from "../../assets/icons";

interface InputProps extends TextInputProps {
  name: string;
  icon?: any;
  password?: boolean;
  rawText?: string;
  onInitialData?: any;
  ref?: any;
  accessibilityRole?: any;
  label?: string;
}

interface InputValueReferer {
  value: string;
}

const Input: React.FC<InputProps> = (
  { name, icon: Icon, password, onInitialData, rawText, label, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const inputValueRef = useRef<InputValueReferer>({ value: defaultValue });
  const [color, setColor] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(password || false);

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const setColorIcon = () => {
    if (isFocused) {
      setColor(styles.colors.primary);
      return styles.colors.primary;
    }
    if (!isFocused) {
      setColor(styles.colors.dark1);
      return styles.colors.dark1;
    }
  };

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputValueRef.current.value) {
      setIsField(true);
    } else {
      setIsField(false);
    }
  }, []);

  useEffect(() => {
    if (onInitialData) onInitialData(defaultValue);
  }, [defaultValue, onInitialData]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({
          text: value,
        });
      },
      clearValue() {
        inputElementRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, rawText, registerField]);

  useEffect(() => {
    inputValueRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    setColorIcon();
  }, [isFocused]);

  const handleSecure = useCallback(() => {
    setVisiblePassword(!visiblePassword);
  }, [visiblePassword]);

  return (
    <Container isErrored={!!error}>
      <Label isField={isField} isFocused={isFocused} isErrored={!!error}>
        {label}
      </Label>
      <ContainerInput isFocused={isFocused} isErrored={!!error}>
        <TextInput
          ref={inputElementRef}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          secureTextEntry={visiblePassword}
          selectionColor="#fff"
          onChangeText={(value: string) => {
            if (inputValueRef.current) {
              inputValueRef.current.value = value;
            }
          }}
          {...rest}
        />
        {Icon && (
          <Icon fill={!!error && !isFocused ? styles.colors.error : color} />
        )}
        {password && (
          <TouchableOpacity onPress={handleSecure}>
            {visiblePassword && (
              <EyeOffOutlined
                fill={!!error && !isFocused ? styles.colors.error : color}
              />
            )}
            {!visiblePassword && (
              <EyeOutlined
                fill={!!error && !isFocused ? styles.colors.error : color}
              />
            )}
          </TouchableOpacity>
        )}
      </ContainerInput>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Input;
