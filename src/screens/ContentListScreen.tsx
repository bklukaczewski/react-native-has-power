import React from 'react';
import { Text } from 'react-native';

import { FullScreenTemplate } from '../components';

export class ContentListScreen extends React.PureComponent {
  render() {
    return (
      <FullScreenTemplate padded>
        <Text>Content list</Text>
      </FullScreenTemplate>
    );
  }
}
