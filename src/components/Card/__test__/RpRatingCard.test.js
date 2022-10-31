import React from 'react';
import renderer from 'react-test-renderer';
import RpRatingCard from '../RpRatingCard';

describe('RpRatingCard Component', () => {
  it('renders RpRatingCard Component correctly', () => {
    const snapshot = renderer.create(<RpRatingCard />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
