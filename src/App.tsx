import React, { PureComponent } from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';

import { RootSwitchNavigator } from './navigators/RootSwitchNavigator';

// Set status bar height on Android to support windowTranslucentStatus style
if (Platform.OS === 'android') {
  // @ts-ignore
  SafeAreaView.setStatusBarHeight(StatusBar.currentHeight);
}

const AppContainer = createAppContainer(RootSwitchNavigator);

export default class App extends PureComponent {
  render() {
    return (
      <>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent />
        <AppContainer />
      </>
    );
  }
}
