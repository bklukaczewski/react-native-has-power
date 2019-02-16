import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationInjectedProps } from 'react-navigation';

export class SignInScreen extends React.PureComponent<NavigationInjectedProps> {
  static navigationOptions = {
    title: 'Sign In',
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello to React Native!</Text>
      </View>
    );
  }
}
