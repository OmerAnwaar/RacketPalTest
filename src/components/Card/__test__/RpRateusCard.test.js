import React from 'react';
import renderer from 'react-test-renderer';
import RpRateUsCard from '../RpRateusCard';

describe('RpRateusCard Component', () => {
  it('renders RpRateusCard Component correctly', () => {
    const snapshot = renderer.create(<RpRateUsCard />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
