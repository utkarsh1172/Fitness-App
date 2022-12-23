import {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import styled from 'styled-components';
// import Avtar from '../assets'

const HeaderComponent = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const monthes = date.getMonth();
  return (
    <Container>
      <HeaderView>
        <Icon name="arrow-left" size={30} color="black" />

        <Text
          onPress={() => setOpen(true)}
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          {date.getDate()}/{monthes + 1}/{date.getFullYear()}
        </Text>
        <DatePicker
          modal
          mode="date"
          androidVariant="iosClone"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Avatar
          source={require('../assets/Avatar.png')}
          style={{width: 35, height: 35}}
        />
      </HeaderView>
      {/* <Text>Hii</Text> */}
    </Container>
  );
};

export default HeaderComponent;

const Container = styled.View`
  padding: 20px;
`;
const Avatar = styled.View`
  width: 35px;
  height: 35px;
`;

const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* justify-content: center; */
  text-align: center;
`;
