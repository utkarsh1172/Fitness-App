import {View, Text} from 'react-native';
import Confetti from 'react-native-confetti-cannon';

const ConfettieCanon = () => {
    return(
        <View style={{flex:1,display:'flex'}}>
            <Text>Hii</Text>
            <Confetti count={200} origin={{x: -10, y: 0}}/>
        </View>
    )
}

export default ConfettieCanon;