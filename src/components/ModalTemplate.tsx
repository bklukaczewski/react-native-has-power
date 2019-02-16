import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

import { palette } from 'styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
  navigation: NavigationScreenProp<NavigationRoute<any>>;
  onPress: () => void;
  buttonTitle: string;
}

interface State {
  backgroundAnimation: Animated.Value;
}

export class ModalTemplate extends React.PureComponent<Props, State> {
  state = {
    backgroundAnimation: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.backgroundAnimation, {
      toValue: 1,
      duration: 200,
    }).start();
  }

  onCancel = () => {
    this.props.navigation.goBack();
  };

  onPress = () => {
    this.props.navigation.goBack();
    this.props.onPress();
  };

  render() {
    const backgroundColor = this.state.backgroundAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.4)'],
    });
    const { children } = this.props;
    return (
      <Animated.View style={[styles.container, { backgroundColor }]}>
        <View style={styles.content}>
          <View>{children}</View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: palette.background,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 12,
  },
});
