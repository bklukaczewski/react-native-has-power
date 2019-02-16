import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { FullScreenTemplate } from 'components';
import firebase, {RNFirebase} from 'react-native-firebase';
import { palette } from '../styles';

export interface Content {
  email: string;
  content: string;
  id: string;
}

interface State {
  contents: Content[];
}

export class ContentListScreen extends React.PureComponent<{}, State> {
  allContentRef: any;

  state = {
    contents: [],
  };

  componentDidMount() {
    this.allContentRef = firebase.firestore().collection('contents');
    this.allContentRef.onSnapshot(this.handleContentsChange);
  }

  handleContentsChange = (querySnapshot: RNFirebase.firestore.QuerySnapshot) => {
    const contents: Content[] = querySnapshot.docs.map((doc) => doc.data() as Content);
    this.setState({contents});
  };

  renderItem = ({ item }: { item: Content }) => (
    <View style={styles.container}>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  extractKey = (item: Content) => item.email;

  render() {
    return (
      <FullScreenTemplate>
        <Text>Content list</Text>
        <FlatList
          data={this.state.contents}
          renderItem={this.renderItem}
          keyExtractor={this.extractKey}
          contentContainerStyle={styles.contentContainer}
        />
      </FullScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: palette.textBlackMuted,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  content: {
    fontSize: 12,
    color: palette.textBlack,
  },
  email: {
    fontSize: 11,
    color: palette.textBlackMuted,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
