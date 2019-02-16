import { Animated, Easing } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  NavigationSceneRendererProps,
} from 'react-navigation';

import { SignInScreen } from '../screens/signIn/SignInScreen';
import { MainTabNavigator } from './AuthenticatedTabNavigator';
import { UnauthenticatedStackNavigator } from './UnauthenticatedStackNavigator';

/*
 * This is the outermost navigator. All routes listed here will be accessible
 * from every point in the app. It might be a perfect choice to put your
 * modal and dialog screens.
 * */
export const RootSwitchNavigator = createSwitchNavigator({
  Unauthenticated: UnauthenticatedStackNavigator,
  Authenticated: MainTabNavigator,
});
