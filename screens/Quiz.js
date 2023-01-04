import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {questionsData} from '../data';
import ConfettiView from '../components/ConfettiView';
import CircularProgress from 'react-native-circular-progress-indicator';

// import ProgressBar from '../compomnents/ProgressBar';
// shuffle the Option

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [alert, setAlert] = useState();
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((index + 1) % (5 + 0));
  //     // Timer();
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [index]);


  useEffect(() => {
    const interval = setTimeout(() => {
      Timer();
      CountDown();
      console.log('Calling');
    }, 30000);
    return () => {
      clearTimeout(interval);
    };
  }, [options, ques, questionNumber]);

  const getQuiz = async () => {
    setIsloading(true);
    // const url =
    //   'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986';
    // const res = await fetch(url);
    // const data = await res.json();
    setQuestions(questionsData.results);
    setOptions(generateOptionsAndShuffle(questionsData.results[0]));
    setIsloading(false);
  };

  const Timer = () => {
    if (ques !== 9) {
      setQues(ques + 1);
      setQuestionNumber(questionNumber + 1);
      console.log(questions[ques + 1]);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    } else {
      handlShownResult();
    }
  };

  useEffect(() => {
    getQuiz();
    // Timer();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setQuestionNumber(questionNumber + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);

    shuffleArray(options);
    // console.log(options);
    return options;
  };

  const handlSelectedOption = _option => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
      createButtonAlertRight();
    }
    if (_option !== questions[ques].correct_answer) {
      createButtonAlertWrong();
    } else if (ques !== 9) {
      setQues(ques + 1);
      setQuestionNumber(questionNumber + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    } else if (ques === 9) {
      handlShownResult();
    } else {
      null;
    }
    console.log(score);
  };

  const handlShownResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };

  const createButtonAlertWrong = () =>
    Alert.alert('OOPS!', 'Its wrong Answer', [
      {text: 'Retry', onPress: () => console.log('alert Closed')},
      // setScore(score - 10),
    ]);
  const createButtonAlertRight = () =>
    Alert.alert('Good.', 'You are going on next Question', [
      {text: 'Next', onPress: () => console.log('alert Closed')},
      // setScore(score - 10),
    ]);


     const CountDown = () => {
      return(
        <CircularProgress
        value={0}
        radius={60}
        maxValue={30}
        initialValue={30}
        progressValueColor={'gold'}
        activeStrokeColor={'gold'}
        activeStrokeWidth={15}
        inActiveStrokeWidth={15}
        duration={30000}
        // onAnimationComplete={handleNextPress}
        style={{margin:10}}
      />
      )
     }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.laoadingSymbole}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Loading...
          </Text>
          <ActivityIndicator size="large" color="#F2AE09" />
        </View>
      ) : (
        questions && (
          <>
            <View style={styles.top}>
              <Text style={styles.Ques}>
                Q.{questionNumber})
                {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity onPress={() => handlSelectedOption(options[0])}>
                <Text style={styles.Option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlSelectedOption(options[1])}>
                <Text style={styles.Option}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlSelectedOption(options[2])}>
                <Text style={styles.Option}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlSelectedOption(options[3])}>
                <Text style={styles.Option}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
          
            <View style={styles.bottom}>
             {/* <CircularProgress
              value={0}
              radius={60}
              maxValue={30}
              initialValue={30}
              progressValueColor={'gold'}
              activeStrokeColor={'gold'}
              activeStrokeWidth={15}
              inActiveStrokeWidth={15}
              duration={30000}
              // onAnimationComplete={handleNextPress}
              style={{margin:10}}
            /> */}
            <CountDown/>
              {ques !== 9 && (
                <View style={styles.button}>
                  <TouchableOpacity onPress={handleNextPress}>
                    <Text style={styles.buttonStyle}>NEXT</Text>
                  </TouchableOpacity>
                </View>
              )}
              {/* {ques !== 9 && (
              <View style={styles.button}>
                <TouchableOpacity onPress={handleNextPress}>
                  <Text style={styles.buttonStyle}>NEXT</Text>
                </TouchableOpacity>
              </View>
            )} */}
              {ques === 9 && (
                <View style={styles.button}>
                  <TouchableOpacity onPress={handlShownResult}>
                    <Text style={styles.buttonStyle}>Show Result</Text>
                  </TouchableOpacity>
                </View>
              )}
              {/* <ProgressBar setp={index} steps={10} height={20} /> */}
            </View>
          </>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  Ques: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    widh: '100%',
  },
  options: {
    marginVertical: 10,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 0.16,
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  button: {
    backgroundColor: '#3cdfff',
    padding: 10,
    alignSelf: 'center',

    // width: 80,
    borderRadius: 8,
    margin: 10,
  },
  buttonStyle: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Option: {
    fontSize: 18,
    color: 'white',
    gap: '1rem',
    margin: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 8,
    fontWeight: '500',
  },
  laoadingSymbole: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
