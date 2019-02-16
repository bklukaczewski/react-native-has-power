import React from 'react';
import {Text} from 'react-native';

import {FullScreenTemplate} from 'components';

export class CreateContentScreen extends React.PureComponent {
    render() {
        return (
            <FullScreenTemplate padded>
                <Text>Content create</Text>
            </FullScreenTemplate>
        );
    }
}
