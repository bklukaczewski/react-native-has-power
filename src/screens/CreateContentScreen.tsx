import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

import { FullScreenTemplate } from 'components';
import firebase from 'react-native-firebase';

interface State {
    input: string;
}

export class CreateContentScreen extends React.PureComponent<{}, State> {

    state: State = {
        input: '',
    };

    sendMessage = () => {
        console.warn(this.state.input);
        console.warn(firebase.auth().currentUser!.email);
    };

    render() {
        return (
            <FullScreenTemplate padded>
                <Text>Content create</Text>
                <TextInput
                    style={styles.textInput}
                    multiline
                    numberOfLines={4}
                    onChangeText={(input) => this.setState({ input })}
                    value={this.state.input}
                />
                <TouchableHighlight
                    onPress={this.sendMessage}
                >
                    <View style={styles.button}>
                        <Text>Send</Text>
                    </View>
                </TouchableHighlight>
            </FullScreenTemplate>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    textInput: {
        height: 80,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
    }
});
