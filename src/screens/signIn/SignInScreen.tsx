import React from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import firebase, { RNFirebase } from 'react-native-firebase';
import SplashScreen from 'react-native-splash-screen';
import { NavigationInjectedProps } from 'react-navigation';
import { palette } from '../../styles';

interface State {
  login: string;
  password: string;
}

export class SignInScreen extends React.PureComponent<
  NavigationInjectedProps,
  State
> {
  static navigationOptions = {
    title: 'Sign In',
  };

  state = {
    login: '',
    password: '',
  };

  onSignUp = async () => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.login, this.state.password);
    } catch (e) {
      Alert.alert('error', e.message);
    }
  };

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  onSignIn = async () => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.login, this.state.password);
    } catch (e) {
      Alert.alert('error', e.message);
    }
  };

  componentDidMount() {
    SplashScreen.hide();
    firebase.auth().onAuthStateChanged((user: RNFirebase.User | null) => {
      if (user) {
        this.props.navigation.navigate('Authenticated');
      } else {
        this.props.navigation.navigate('Unauthenticated');
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 24 }}>
        <Text>Login</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={text => this.setState({ login: text })}
          value={this.state.login}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry
          value={this.state.password}
        />

        <TouchableHighlight
          underlayColor={palette.underlay}
          onPress={this.onSignIn}
        >
          <View style={styles.container}>
            <Image
              style={styles.buttonImage}
              source={{
                uri:
                  'https://facebook.github.io/react-native/docs/assets/favicon.png',
              }}
            />
            <Text style={styles.text}>Login</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={palette.underlay}
          onPress={this.navigateToSignUp}
        >
          <View style={styles.container}>
            <Image
              style={styles.buttonImage}
              source={{
                uri:
                  'https://facebook.github.io/react-native/docs/assets/favicon.png',
              }}
            />
            <Text style={styles.text}>Go to sign up</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: palette.background,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonImage: {
    width: 24,
    height: 24,
    marginEnd: 20,
  },
});
