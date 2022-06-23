import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../../pages/Onboarding";
import SignUp from "../../pages/SignUp";
import SignUpProfile from "../../pages/SignUpProfile";
import SignUpSelectGender from "../../pages/SignUpSelectGender";

type RootStackParamList = {
  Onboarding: { userId: string };
  SignUp: { userId: string };
  SignUpProfile: { userId: string };
  SignUpSelectGender: { userId: string };
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Stack: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignUpProfile" component={SignUpProfile} />
      <Screen name="SignUpSelectGender" component={SignUpSelectGender} />
    </Navigator>
  );
};

export default Stack;
