import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';

import {leaderboardData} from '../data';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const LeaderBoard = () => {
  const [data, setData] = useState(leaderboardData);
  // const [level, setLevel] = useState(2);

  const _renderItem = ({item}) => {
    return (
      <BoardContainer>
        <Board>
          <BoardContent>
            <ProfileView>
              <UserId>{item.id}</UserId>
              <Icon name="face-man-profile" size={30} color="grey" />
              <View
                style={{
                  // borderColor: 'white',
                  width: 12,
                  height: 12,
                  position: 'relative',
                  top: -9,
                  right: 8,
                  backgroundColor: 'black',
                  borderRadius: 2,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {item.level}
                </Text>
              </View>
              <UserName>{item.name}</UserName>
            </ProfileView>
            <View>
              <Range>{item.range}</Range>
            </View>
          </BoardContent>
        </Board>
      </BoardContainer>
    );
  };
  return (
    <Container>
      <TitleHead>
        {/* <LinearGradient
          start={{x: 0.1, y: 0.2}}
          end={{x: 0.9, y: 1.0}}
          colors={['#FFD700', 'orangered']}
          style={{height: 180}}> */}
          <View>
            <Title>LeaderBoards</Title>
          </View>
          <View style={{marginHorizontal: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                Mumbai Virtual Tour
              </Text>
              <Text
                style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 10}}>
                WALK + RUN
              </Text>
            </View>
            <HeadText>#MumbaiMeriJaan!</HeadText>
            <TouchableOpacity>
              <Text>Let your friends know about this challenge --></Text>
            </TouchableOpacity>
          </View>
        {/* </LinearGradient> */}
      </TitleHead>
      <View style={{marginLeft: 10}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          Top 10 Monthly Champion
        </Text>
      </View>
      <FlatlistContainer>
     
          <FlatList
            style={{margin: 10}}
            keyExtractor={(_, index) => index}
            data={data}
            renderItem={_renderItem}
          />
      </FlatlistContainer>
    </Container>
  );
};

export default LeaderBoard;

const Container = styled.View`
  flex: 1;
  /* margin: 10px; */
`;
const TitleHead = styled.View`
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
`;
const Title = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: black;
  margin: 20px;
`;
const HeadText = styled.Text`
  color: #3cdfff;
  font-size: 20;
  font-weight: bold;
`;

const FlatlistContainer = styled.View`
  /* background-color: 'rgba(1,1,1,0.1)'; */
  margin: 10px;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
`;

const BoardContainer = styled.View`
  /* padding: 0px 10px 0px 10px; */
`;

const Board = styled.View`
  background-color: 'rgba(1,1,1,0.1)';
  border-radius: 10px;
  overflow: hidden;
  margin: 1px 5px 1px 5px;
  border: 1px solid gold;
`;
const BoardContent = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

const ProfileView = styled.View`
  align-items: center;
  flex-direction: row;
`;

const UserId = styled.Text`
  font-size: 16px;
  line-height: 24px;
  /* font-weight: bold; */
  color: black;
  margin-right: 10px;
`;
const UserName = styled.Text`
  font-size: 16px;
  /* line-height: 24px; */
  /* font-weight: bold; */
  margin-left: 10px;
  color: black;
`;
const Range = styled.Text`
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  color: black;
`;
