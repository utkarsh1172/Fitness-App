import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LotteieView from 'lottie-react-native';
import Confetti from 'react-native-confetti-cannon';

const Result = ({navigation, route}) => {
  const {score} = route.params;

  const resultBanner =
    score > 40
      ? 'https://assets1.lottiefiles.com/packages/lf20_oU9zo80dMq.json'
      : 'https://assets3.lottiefiles.com/packages/lf20_ls1v2j0r.json';

  return (
    <>
    <View style={styles.mainConatiner}>
      <View>
        <View>
          <Text style={styles.header}>Result</Text>
        </View>
        <Text style={styles.scoreValue}>Score:{score}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <LotteieView
          source={{
            uri: resultBanner,
          }}
          autoPlay
        />
      </View>
      <View style={styles.homeButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonStyle}>Home</Text>
        </TouchableOpacity>
      </View>

    </View>
    {score > 40 ? <Confetti
        count={50}
        origin={{x: -20, y: -10}}
        explosionSpeed={500}
        fadeOut={true}
        fallSpeed={5000}
      /> : score > 40 ?
      <Confetti
        count={50}
        origin={{x: 360, y: 0}}
        explosionSpeed={800}
        fadeOut={true}
        fallSpeed={5000}
      /> 
      : null}
    </>
  );
};

export default Result;

const styles = StyleSheet.create({
  mainConatiner: {
    height: '100%',
    flex: 1,
    margin: 20,
  },
  header: {
    padding: 10,
    color: 'black',
    borderRadius: 8,
    fontSize: 36,
    alignSelf: 'center',
  },
  banner: {
    heigh: 300,
    width: 300,
  },
  bannerContainer: {
    flex: 1,
  },

  homeButton: {
    backgroundColor: '#3cdfff',
    padding: 10,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 8,
    margin: 20,
  },
  buttonStyle: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
    color: 'black',
  },
});
