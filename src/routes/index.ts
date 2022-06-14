import { createAppContainer } from "react-navigation";
import { createStackNavigator, StackHeaderProps } from "react-navigation-stack";

import Onboarding from "../pages/Onboarding";
import SignUp from "../pages/SignUp";
import SignUpProfile from "../pages/SignUpProfile";

const MainNavigator = createStackNavigator({
  Onboarding: {
    screen: Onboarding,
    navigationOptions: {
      header: (props: StackHeaderProps) => false,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: (props: StackHeaderProps) => false,
    },
  },
  SignUpProfile: {
    screen: SignUpProfile,
    navigationOptions: {
      header: (props: StackHeaderProps) => false,
    },
  },
});

const Routes = createAppContainer(MainNavigator);
export default Routes;
