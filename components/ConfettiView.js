import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  Pressable,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Entypo';
import LotteieView from 'lottie-react-native';
import Confetti from 'react-native-confetti-cannon';

const ConfettiView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [confettie, setConfettie] = useState(false);
  return (
    <Container>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalContainer>
          <ModalView>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <TouchableOpacity>
                <Icon
                  name="cross"
                  size={35}
                  color="black"
                  onPress={() => setModalVisible(false)}
                  style={{marginRight: 5, marginTop: 5}}
                />
              </TouchableOpacity>
            </View>
            <View>
              <ModalHeader>Score Card</ModalHeader>
              <ScoreText>
                8/10
              </ScoreText>
            </View>

            <ConfeView visible={confettie}>
              <LotteieView
                style={{height: '90%', width: '100%'}}
                source={{
                  uri: 'https://assets1.lottiefiles.com/packages/lf20_oU9zo80dMq.json',
                }}
                autoPlay
              />
            </ConfeView>
          </ModalView>
        </ModalContainer>
        <Confetti
          count={50}
          origin={{x: -20, y: -10}}
          explosionSpeed={500}
          fadeOut={true}
          fallSpeed={3000}
        />
        <Confetti
          count={50}
          origin={{x: 360, y: 0}}
          explosionSpeed={800}
          fadeOut={true}
          fallSpeed={3000}
        />
      </Modal>

      <Pressable>
        <Button title="On Click" onPress={() => setModalVisible(true)} />
      </Pressable>
    </Container>
  );
};

export default ConfettiView;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ModalView = styled.View`
  width: 100%;
  height: 60%;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  elevation: 5;
`;

const ScoreText = styled.Text`
  text-align: center;
  font-size: 18;
  font-weight: 800;
`;
const ConfeView = styled.View`
  display: flex;
  height: 80%;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
`;
const ModalHeader = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;
const ButtonText = styled.Text`
  border-radius: 25px;
  justify-content: flex-end;
  font-size: 28px;
  margin: 5px 0px -10px 0px;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.5);
  width: 50px;
  text-align: center;
`;
const ButtonText2 = styled.Text`
  border-radius: 25px;
  justify-content: flex-end;
  font-size: 26px;
  margin: 5px 0px -10px 0px;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.5);
`;
