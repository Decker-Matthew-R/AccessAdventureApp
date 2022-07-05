import React from 'react';
import { View } from 'react-native-web';
import renderer from 'react-test-renderer';
import LoginScreen from '..screens/LoginScreen';



it('should find the button via testId', () => {
    const testIdName = 'Login';
 
    const {getByTestId} = renderer(<App />);
 
    const foundButton = getByTestId(testIdName);
 
    expect(foundButton).toBeTruthy();
});


it('should find the button via testId', () => {
    const testIdName = 'Register';
 
    const {getByTestId} = renderer(<App />);
 
    const foundButton = getByTestId(testIdName);
 
    expect(foundButton).toBeTruthy();
});