import React, { useState, useCallback, forwardRef } from "react";
import { TextInputMask } from "react-native-masked-text";
import Input from "../Input";

const InputMask = ({ type, rawText, setRawText, ...rest }, inputRef) => {
  const [text, setText] = useState("");

  const handleChangeText = useCallback(
    (maskedText, unmaskedText) => {
      setText(maskedText);
      setRawText(unmaskedText);
    },
    [text]
  );

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      {...rest}
    />
  );
};
export default forwardRef(InputMask);
