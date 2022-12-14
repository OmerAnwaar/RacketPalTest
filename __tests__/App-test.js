import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

const mockedFirebaseAnalyticsLogEvent = jest.fn();
const mockedFirebaseAnalyticsLogSelectContent = jest.fn();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-firebase/analytics', () => () => {
  return {
    logEvent: mockedFirebaseAnalyticsLogEvent,
    logSelectContent: mockedFirebaseAnalyticsLogSelectContent,
  };
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('App', () => {
  it('renders App correctly', () => {
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
