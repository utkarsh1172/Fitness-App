import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import React from 'react';


const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
        <View>
      <Text style={styles.header}>Quizzler</Text>
    </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/customer-survey-3428393-2910850.png',
          }}
          style={{height:300, width:400}}
          resizeMode="contain"
        />
        {/* <Video
          style={styles.backgroundVideo}
  
          source={{
            uri: 'https://cdnl.iconscout.com/lottie/premium/thumb/man-facing-website-error-4733539-3938559.mp4',
          }}
        /> */}
      </View>
      <View style={styles.startButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.buttonStyle}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    padding: 10,
    color: 'black',
    borderRadius: 8,
    fontSize: 36,
    alignSelf: 'center',
  },
  startButton: {
    backgroundColor:'#3cdfff',
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
