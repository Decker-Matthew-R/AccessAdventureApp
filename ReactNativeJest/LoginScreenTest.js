import React from 'react';
import { View } from 'react-native-web';
import renderer from 'react-test-renderer';
import LoginScreen from '..screens/LoginScreen';

test('renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
  });

test('renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(!tree).toMatchSnapshot();
    });

 test('renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(!tree).toMatchSnapshot();
    });