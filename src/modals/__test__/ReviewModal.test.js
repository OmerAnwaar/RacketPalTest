import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ReviewModal from '../ReviewModal';

const mockedFirebaseAnalyticsLogEvent = jest.fn();
const mockedFirebaseAnalyticsLogSelectContent = jest.fn();

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

describe('Review Component Screen', () => {
  it('renders Review Modal correctly', () => {
    const rendered = render(
      <ReviewModal visible={'false'} toggleModal={jest.fn()} />,
    );
    expect(rendered).toMatchSnapshot();
  });

  // it('should render handle feedback', () => {
  //   const testIdName = 'feedback';
  //   const {findByTestId} = render(
  //     <ReviewModal visible={'false'} toggleModal={jest.fn()} />,
  //   );
  //   fireEvent.press(findByTestId(testIdName));
  // });
});
