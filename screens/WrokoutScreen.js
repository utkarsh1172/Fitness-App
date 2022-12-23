import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dateData, workOutTypes} from '../data';
import BottomNavigation from '../components/BottomNavigation';
import Weekday from '../components/Weekday';
import HeaderComponent from '../components/HeaderComponent';

const WorkOutScreen = () => {
  const [data, setData] = useState(workOutTypes);

  const _renderItem = ({item}) => {
    return (
      <Card>
        <RowView>
          <Icon
            name="bicycle"
            size={40}
            color="#04d9ff"
            style={{width: 50, textAlign: 'center'}}
          />
          <View style={{flexDirection: 'row'}}>
            <ValueText>{item.steps}</ValueText>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'flex-end',
                marginTop: 15,
                margin: 5,
              }}>
              {item.type}
            </Text>
          </View>
        </RowView>
        <RowView>
          <WorkOutName>{item.name}</WorkOutName>
          <TimeText>{item.time}</TimeText>
        </RowView>
      </Card>
    );
  };
  return (
    <>
      <HeaderComponent />
      <Weekday />
      <Container>
        <FlatList
          renderItem={_renderItem}
          keyExtractor={(_, index) => index}
          data={data}
        />
        <FlatList />
      </Container>
      <BottomNavigation />
    </>
  );
};

export default WorkOutScreen;

const Container = styled.View`
  display: flex;
  flex: 1;
  margin: 20px;
  margin-bottom: 0px;
`;

const Card = styled.View`
  flex: 1;
  background-color: white;
  margin: 10px 0px 10px 0px;
  border-radius: 10px;
  padding: 10px;
`;

const RowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TimeText = styled.Text`
  background-color: #f4ecc2;
  padding-left: 10px;
  padding-right: 10px;
  padding: 5px;
  color: orangered;
  border-radius: 40px;
  font-size: 16px;
  font-weight: bold;
`;

const WorkOutName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-left: 10;
`;

const ValueText = styled.Text`
  font-size: 30px;
  color: black;
  font-weight: bold;
`;

const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  align-items: center;
`;
