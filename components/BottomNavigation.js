import {View, Text} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Octicons'


const BottomNavigation = () => {
    return(
        <Container>
        <Bottom>
          <Icon name="home" size={25} color="gray" />
          <Icon name="user" size={25} color="gray" />
          <View
            style={{
              backgroundColor: '#8F00FF',
              borderRadius: 50,
              width: 40,
              height: 40,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 34, color: 'white'}}>+</Text>
          </View>
          <Icon1 name="graph" size={25} color="gray" />
          <Icon name="bell" size={25} color="gray" />
        </Bottom>
      </Container>
    )
}

export default BottomNavigation;

const Container = styled.View`
  background-color: white;
  padding: 20px;
`

const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  align-items: center;
`;