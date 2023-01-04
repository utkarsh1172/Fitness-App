import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WorkOutScreen from './screens/WrokoutScreen';
import NutritionScreen from './screens/NutritionScreen';
import ConfettiView from './components/ConfettiView';
import MyStack from './navigation/StackScreen';
import WeeklyData from './components/Weekday';
import Quiz from './screens/Quiz';
import LeaderBoard from './components/LeaderBoard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      {/* <HomeScreen /> */}
      {/* <WorkOutScreen /> */}
      {/* <NutritionScreen /> */}
      {/* <ConfettiView/> */}
      {/* <ConfettieCanon/> */}
      {/* <WeeklyData/> */}
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    {/* <Quiz/> ` */}
    {/* <LeaderBoard/> */}
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

// Stack screens

// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="fitnessui" component={MainScreen} />
//     <Stack.Screen name="Homescreen" component={HomeScreen} />
//     <Stack.Screen
//       name="Workoutscreen"
//       component={WorkOutScreen}
//       options={{
//         title: 'Monday, 27',
//         // headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         headerTitleAlign: 'center',
//       }}
//     />
//     <Stack.Screen
//       name="Nutritionscreen"
//       component={NutritionScreen}
//       options={{
//         title: 'Monday,27',
//         // headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         headerTitleAlign: 'center',
//       }}
//     />
//   </Stack.Navigator>
// </NavigationContainer>

// <CircularBar/>
// <Dropdown/>
