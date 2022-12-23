import {View, Text, Button} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const MainScreen = ({navigation}) => {
  return (
    <View >
      <Text>fitnessUi</Text>
      <View style={{margin:10}}>
      <Button
        title="onClick HomeScreen"
        onPress={() => navigation.navigate('Homescreen')}
      />
      </View>
      <View style={{margin:10}}>
      <Button
        title="onClick CalenderScreen"
        onPress={() => navigation.navigate('Workoutscreen')}
      />
      </View>
      <View style={{margin:10}}>
      <Button
        title="onClick CalenderScreen"
        onPress={() => navigation.navigate('Nutritionscreen')}
      />
      </View>
    </View>
  );
};

export default MainScreen;
