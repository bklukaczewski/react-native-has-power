import { createStackNavigator } from 'react-navigation';
import { SignInScreen } from '../screens/signIn/SignInScreen';
import {SignUpScreen} from '../screens/signUp/SignUpScreen';

export const UnauthenticatedStackNavigator = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});
