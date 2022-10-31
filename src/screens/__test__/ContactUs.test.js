import React from 'react';
import renderer from 'react-test-renderer';
import ContactUs from '../ContactUs';

describe('Contact Screen', () => {
  it('renders correctly', () => {
    const snapshot = renderer.create(<ContactUs />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
