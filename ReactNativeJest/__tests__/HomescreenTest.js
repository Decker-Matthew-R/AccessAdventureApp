import React from 'react';
import { View } from 'react-native-web';
import renderer from 'react-test-renderer';
import Homescreen from '..screens/HomeScreen';

test('renders correctly', () => {
  const tree = renderer.create(<Homescreen />).toJSON();
  expect(tree).toMatchSnapshot();
  });