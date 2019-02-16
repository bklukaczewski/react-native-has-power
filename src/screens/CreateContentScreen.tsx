import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-crop-picker';

import { FullScreenTemplate } from 'components';

const getRandomId = (): string => {
    return 'a';
};

interface State {
    input: string;
}

export class CreateContentScreen extends React.PureComponent<{}, State> {

    state: State = {
        input: '',
    };

    sendMessage = async () => {
        const contentCollectionRef = firebase.firestore()
            .collection('contents');
        await contentCollectionRef.add({
            email: firebase.auth().currentUser!.email,
            content: this.state.input,
            id: getRandomId(),
        });
        this.setState({input: ''});
    };

    addImage = async () => {
        const image = await ImagePicker.openPicker({
            compressImageMaxHeight: 1024,
            compressImageMaxWidth: 1024,
            compressImageQuality: 0.7,
        });
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
                <TouchableHighlight
                    onPress={this.addImage}
                >
                    <View style={styles.button}>
                        <Text>Add image</Text>
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
