import {useState} from 'react';
import {TouchableOpacity, View, Text, Image, Pressable} from 'react-native';
// import styles from '../styles';
import styled from 'styled-components';

const weekData = [
  {
    day: 'M',
    date: '11',
    val: false,
  },
  {
    day: 'T',
    date: '12',
    val: false,
  },
  {
    day: 'W',
    date: '13',
    val: true,
  },
  {
    day: 'T',
    date: '14',
    val: false,
  },
  {
    day: 'F',
    date: '15',
    val: false,
  },
  {
    day: 'S',
    date: '16',
    val: true,
  },
  {
    day: 'S',
    date: '17',
    val: false,
  },
];

const Weekday = () => {
  return (
    <Container>
      <WeekRow>
        {weekData.map((item, index) => {
          return (
            <>
              <ActiveDays active={item.val}>
                <DayText active={item.val}>{item.day}</DayText>
                <DateText active={item.val}>{item.date}</DateText>
              </ActiveDays>
            </>
          );
        })}
      </WeekRow>
    </Container>
  );
};

export default Weekday;
const ActiveDays = styled.View`
  background: ${props => (props.active ? '#8F00FF' : 'rgba(0,0,0,0)')};
  border-radius: 30px;
  padding: 5px;
`;

const Container = styled.View`
  margin: 0px 10px 0px 10px;
`;

const WeekRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DayText = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 500;
  text-align: center;
  color: ${props => (props.active ? 'white' : 'black')};
`;

const DateText = styled.Text`
  font-size: 16px;
  font-weight: 800;
  color: black;
  text-align: center;
  border-radius: 50px;
  padding: 4px;
  background: ${props => (props.active ? 'white' : 'rgba(0,0,0,0)')};
`;
