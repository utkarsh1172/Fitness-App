import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import {transparent} from 'react-native-paper/lib/typescript/styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {exerciseData} from '../data';
import BottomNavigation from '../components/BottomNavigation';
import HeaderComponent from '../components/HeaderComponent';

const HomeScreen = () => {
  const [data, setData] = useState(exerciseData);
  const _renderItem = ({item}) => {
    return (
      <Card>
        <View style={{margin: 10}}>
          <Icon2 name="dumbbell" size={35} color="black" />

          <HeadText>{item.name}</HeadText>
          <TotalWorkouts>{item.total}</TotalWorkouts>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              textAlign: 'center,',
              marginTop: 15,
            }}>
            <Icon1 name="clockcircleo" size={15} color="black" />
            <TimeText>{item.time}</TimeText>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <>
      <HeaderContainer>
        <HeaderView>
          <Icon name="arrow-left" size={30} color="black" />
          <HeaderName onPress={() => setOpen(true)} style={{}}>
            Home
          </HeaderName>
          <Image
            source={require('../assets/Avatar.png')}
            style={{width: 35, height: 35}}
          />
        </HeaderView>
      </HeaderContainer>
      <Conatiner>
        <Header>
          <HeaderText>Hi Anabelle</HeaderText>
          <HeaderText
            style={{fontWeight: 'bold', color: 'black', fontSize: 26}}>
            Get in Shape
          </HeaderText>
        </Header>
        <CardContainer>
          <CardHeadText>Entry Level</CardHeadText>
          <InfoContainer>
            <NameHeader>Shoulder Press</NameHeader>
            <InfoText>16 shoulder workout</InfoText>
            <InfoText>videos for you</InfoText>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity>
                <Icon1 name="play" size={35} color="white" />
              </TouchableOpacity>
              <Text style={{margin: 20, color: 'white'}}>34 Minutes</Text>
            </View>
          </InfoContainer>
        </CardContainer>

        <ExerciseContainer>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <ExerciseHeader>Popular Exercises</ExerciseHeader>
            <ViewText>View All</ViewText>
          </View>
        </ExerciseContainer>
        <FlatlistContainer>
          <FlatList
            renderItem={_renderItem}
            keyExtractor={(_, index) => index}
            data={data}
            horizontal={true}
          />
        </FlatlistContainer>
      </Conatiner>
      <BottomNavigation />
    </>
  );
};

export default HomeScreen;

const HeaderContainer = styled.View`
  padding: 20px;
`;

const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* justify-content: center; */
  text-align: center;
`;

const HeaderName = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const Conatiner = styled.View`
  display: flex;
  flex: 1;
  margin: 20px;
  margin-bottom: 0px;
`;
const Header = styled.View`
  display: flex;
`;
const HeaderText = styled.Text`
  font-size: 22px;
`;
const CardContainer = styled.View`
  /* width: '100%'; */
  height: 200px;
  background-color: orangered;
  margin-top: 20px;
  border-radius: 20px;
`;
const CardHeadText = styled.Text`
  color: white;
  background-color: rgba(0, 0, 0, 0.17);
  margin: 25px;
  width: 25%;
  text-align: center;
  padding: 5px;
  border-radius: 50px;
  font-size: 16px;
  margin-bottom: 5px;
`;
const InfoContainer = styled.View`
  margin-left: 20px;
`;
const NameHeader = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
const InfoText = styled.Text`
  color: white;
`;

const ExerciseContainer = styled.View`
  margin-top: 20px;
`;

const ExerciseHeader = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: black;
`;

const ViewText = styled.Text`
  background-color: rgba(211, 211, 211, 0.4);
  padding: 5px;
  text-align: center;
  border-radius: 50px;
  width: 25%;
  color: orangered;
  font-weight: bold;
  font-size: 16px;
`;
const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  align-items: center;
`;

// Flatlist styling

const CardContain = styled.View`
  width: 30%;
  height: 100px;
  background-color: gray;
`;
const FlatlistContainer = styled.View`
  /* background-color: 'rgba(1,1,1,0.1)'; */
  margin: 10px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
`;

const Card = styled.View`
  margin: 2px 5px 2px 5px;
  background-color: white;
  border-radius: 5px;
  width: 120px;
`;
const HeadText = styled.Text`
  font-size: 16;
  color: black;
  font-weight: bold;
`;
const TotalWorkouts = styled.Text`
  font-size: 14;
`;

const TimeText = styled.Text`
  font-size: 16;
  margin-left: 5;
  color: black;
  font-weight: bold;
`;
