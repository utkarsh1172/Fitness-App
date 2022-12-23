import {View, Text} from 'react-native';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import styled from 'styled-components';

const CircularBar = () => {
  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
  };

  return (
    <CircularView>
      <CircularProgressBase
        activeStrokeWidth={8}
        inActiveStrokeWidth={2}
        inActiveStrokeOpacity={0.2}
        value={55}
        radius={70}
        activeStrokeColor={'purple'}
        inActiveStrokeColor={'gray'}>
        <CircularProgressBase
          activeStrokeWidth={8}
          inActiveStrokeWidth={2}
          inActiveStrokeOpacity={0.2}
          value={70}
          radius={50}
          activeStrokeColor={'orangered'}
          inActiveStrokeColor={'gray'}>
          <CircularProgressBase
            activeStrokeWidth={8}
            inActiveStrokeWidth={2}
            inActiveStrokeOpacity={0.2}
            value={40}
            radius={30}
            activeStrokeColor={'#04d9ff'}
            inActiveStrokeColor={'gray'}
          />
        </CircularProgressBase>
      </CircularProgressBase>
    </CircularView>
  );
};

export default CircularBar;

const CircularView = styled.View`
  justify-content: center;
  margin: 15px;
`;
