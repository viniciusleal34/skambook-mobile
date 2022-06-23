import React, { useEffect, useState } from "react";
import { Animated } from "react-native";

// import { Container } from './styles';

interface ContentAnimatedProps {
  children: any;
}

const ContentAnimated: React.FC<ContentAnimatedProps> = ({ children }) => {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 30 }));
  Animated.sequence([]).start();

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 1,
      bounciness: 30,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: offset.y }],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default ContentAnimated;
