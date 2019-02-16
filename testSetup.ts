import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'react-native/jest/setup';

import { NativeModules } from 'react-native';

NativeModules.BlobModule = {
  ...NativeModules.BlobModule,
  addNetworkingHandler: jest.fn(),
};

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'ios';
  return Platform;
});

jest.mock('Alert', () => {
  return {
    alert: jest.fn(),
  };
});

configure({ adapter: new Adapter() });
