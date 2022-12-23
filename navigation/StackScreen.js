import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

export default MyStack;
