import React from 'react';
import { Text } from 'react-native';

import { FullScreenTemplate } from 'components';
import firebase from 'react-native-firebase';

export class CreateContentScreen extends React.PureComponent {
  render() {
    return (
      <FullScreenTemplate padded>
        <Text>Content create</Text>
        <Text>Hello {firebase.auth().currentUser!.email}</Text>
      </FullScreenTemplate>
    );
  }
}
