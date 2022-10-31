import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../HomeScreen';

const mockedFirebaseAnalyticsLogEvent = jest.fn();
const mockedFirebaseAnalyticsLogSelectContent = jest.fn();

jest.mock('@react-native-firebase/analytics', () => () => {
  return {
    logEvent: mockedFirebaseAnalyticsLogEvent,
    logSelectContent: mockedFirebaseAnalyticsLogSelectContent,
  };
});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

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

describe('Test Screen', () => {
  it('renders Home screen correctly', () => {
    const snapshot = renderer.create(<HomeScreen />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  // it('onToggle coverage', () => {
  //   // render the component on virtual dom
  //   let tree = renderer.create(<HomeScreen />).toJSON();
  //   expect(global.utils.findById(tree, 'rating')).toBeDefined();
  // });
});
