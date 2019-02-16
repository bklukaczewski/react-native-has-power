import React from 'react';
import {Text} from 'react-native';

import {FullScreenTemplate} from 'components';

interface Content {
    email: string;
    content: string;
}

const contents: Content[] = [
    {'email': 'gelcom0@360.cn', 'content': '17 Butterfield Crossing'},
    {'email': 'edannohl1@skyrock.com', 'content': '89 Jenna Circle'},
    {'email': 'msaiger2@ebay.co.uk', 'content': '5 Bluejay Center'},
    {'email': 'ktildesley3@51.la', 'content': '945 Sutherland Hill'},
    {'email': 'pabba4@hubpages.com', 'content': '86205 Graedel Hill'},
    {'email': 'wpearle5@plala.or.jp', 'content': '94 Susan Plaza'},
    {'email': 'snend6@ox.ac.uk', 'content': '1155 North Hill'},
    {'email': 'rfranies7@51.la', 'content': '4720 Mallard Park'},
    {'email': 'bchiechio8@redcross.org', 'content': '301 Columbus Crossing'},
    {'email': 'aboughen9@stanford.edu', 'content': '496 Hallows Drive'},
    {'email': 'lsykesa@reuters.com', 'content': '828 Sycamore Place'},
    {'email': 'scooleb@google.com.hk', 'content': '7 Pierstorff Junction'},
    {'email': 'ahalsallc@dropbox.com', 'content': '3 Hazelcrest Street'},
    {'email': 'dmegarrelld@jimdo.com', 'content': '2263 Bayside Avenue'},
    {'email': 'agirkine@army.mil', 'content': '46 Messerschmidt Way'},
    {'email': 'gwhitehairf@miitbeian.gov.cn', 'content': '483 Anhalt Plaza'},
    {'email': 'rhaylesg@wisc.edu', 'content': '6137 Petterle Avenue'},
    {'email': 'mgroocockh@meetup.com', 'content': '415 Sugar Street'},
    {'email': 'rmcguanei@addthis.com', 'content': '2 Longview Plaza'},
    {'email': 'lrizzelloj@eepurl.com', 'content': '29 Mandrake Way'}
];


export class ContentListScreen extends React.PureComponent {
    render() {
        return (
            <FullScreenTemplate padded>
                <Text>Content list</Text>
            </FullScreenTemplate>
        );
    }
}
