import {View, Text, Alert} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styled from 'styled-components';
import BottomNavigation from '../components/BottomNavigation';
import {mealdata, mealItems} from '../data';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import CircularBar from '../components/CircularBAr';
import HeaderComponent from '../components/HeaderComponent';

const  NutritionScreen = () => {
  const [data, setData] = useState(mealItems);
  const [breakfastVisible, setBreakfastVisible] = useState(false);
  const [lunchVisible, setLunchVisible] = useState(false);
  const [dinnerVisible, setDinnerVisible] = useState(false);

  const _renderItem = ({item}) => {
    return (
      <Card>
        <CardView
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopColor: '#D3D3D3',
            borderTopWidth: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon1
              name="rice"
              size={40}
              color="black"
              style={{marginRight: 10}}
            />
            <View>
              <NameText>{item.name}</NameText>
              <Text>{item.quantity}</Text>
            </View>
          </View>
          <ValueText>{item.value}</ValueText>
        </CardView>
      </Card>
    );
  };

  const BreakfastMeal = () => {
    return (
      <View>
        <FlatList
          renderItem={_renderItem}
          keyExtractor={(_, index) => index}
          data={data}
        />
      </View>
    );
  };
  const LunchMeal = () => {
    return (
      <View>
        <FlatList
          renderItem={_renderItem}
          keyExtractor={(_, index) => index}
          data={data}
        />
      </View>
    );
  };
  const DinnerMeal = () => {
    return (
      <View style={{}}>
        <FlatList
          renderItem={_renderItem}
          keyExtractor={(_, index) => index}
          data={data}
        />
      </View>
    );
  };
  return (
    <>
      <HeaderComponent />
      <Container>
        <ProgressConatiner>
          <CircularBar />
          <NutritionName>
            <RowView>
              <Icon name="dot-fill" size={20} color="purple" />
              <NutritionText>Protein</NutritionText>
            </RowView>
            <RowView>
              <Icon name="dot-fill" size={20} color="orangered" />
              <NutritionText>carbs</NutritionText>
            </RowView>
            <RowView>
              <Icon name="dot-fill" size={20} color="#04d9ff" />
              <NutritionText>Fat</NutritionText>
            </RowView>
          </NutritionName>
          <NutritionValue>
            <NutritionValueText>324 of 640</NutritionValueText>
            <NutritionValueText>124 of 230</NutritionValueText>
            <NutritionValueText>84 of 160</NutritionValueText>
          </NutritionValue>
        </ProgressConatiner>
        <ScrollView style={{flex: 1}}>
          <MealContainer>
            <MealView style={{marginTop: 10, marginBottom: 10}}>
              <MealCard>
                <MealText>Breakfasr: 186 cal</MealText>
                {!breakfastVisible ? (
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="gray"
                    onPress={() =>
                      !breakfastVisible
                        ? setBreakfastVisible(true)
                        : setBreakfastVisible(false)
                    }
                    style={{width: 40, height: 25, textAlign: 'right'}}
                  />
                ) : (
                  <Icon
                    name="chevron-down"
                    size={20}
                    color="gray"
                    onPress={() =>
                      !breakfastVisible
                        ? setBreakfastVisible(true)
                        : setBreakfastVisible(false)
                    }
                    style={{width: 40, height: 25, textAlign: 'right'}}
                  />
                )}
              </MealCard>
              {breakfastVisible ? BreakfastMeal() : null}
            </MealView>
            <MealView style={{marginTop: 10, marginBottom: 10}}>
              <MealCard>
                <MealText>Lunch: 388 cal</MealText>
                {!lunchVisible ? (
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="gray"
                    onPress={() =>
                      !lunchVisible
                        ? setLunchVisible(true)
                        : setLunchVisible(false)
                    }
                    style={{width: 40, height: 25, textAlign: 'right'}}
                  />
                ) : (
                  <Icon
                    name="chevron-down"
                    size={20}
                    color="gray"
                    onPress={() =>
                      !lunchVisible
                        ? setLunchVisible(true)
                        : setLunchVisible(false)
                    }
                    style={{width: 40, height: 25, textAlign: 'right'}}
                  />
                )}
              </MealCard>
              {lunchVisible ? LunchMeal() : null}
            </MealView>
            <MealView
              style={{marginTop: 10, marginBottom: 10, borderRadius: 10}}>
              <MealCard>
                <MealText>Dinner: 200 cal</MealText>
                {!dinnerVisible ? (
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="gray"
                    onPress={() =>
                      !dinnerVisible
                        ? setDinnerVisible(true)
                        : setDinnerVisible(false)
                    }
                    style={{width: 40, height: 25, textAlign: 'right'}}
                  />
                ) : (
                  <Icon
                    name="chevron-down"
                    size={20}
                    color="gray"
                    onPress={() =>
                      !dinnerVisible
                        ? setDinnerVisible(true)
                        : setDinnerVisible(false)
                    }
                    style={{width: 40, height: 25,textAlign: 'right'}}
                  />
                )}
              </MealCard>
              {dinnerVisible ? DinnerMeal() : null}
            </MealView>
          </MealContainer>
        </ScrollView>
      </Container>
      <BottomNavigation />
    </>
  );
};

export default NutritionScreen;

const Container = styled.View`
  display: flex;
  flex: 1;
  margin: 0px 20px 0px 20px;
  /* background-color: red; */
`;

const ProgressConatiner = styled.View`
  background-color: white;
  width: 100%;
  height: 180px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const ProgressBar = styled.View`
  justify-content: center;
  margin: 10px;
`;

const NutritionName = styled.View`
  justify-content: center;
`;

const NutritionText = styled.Text`
  font-size: 18;
  font-weight: 500;
  color: black;
  margin: 5px;
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NutritionValue = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

const NutritionValueText = styled.Text`
  font-size: 16px;
  color: black;
  margin: 5px;
  margin-right: 10px;
`;

const MealContainer = styled.View`
  /* margin: 10px; */
  display: flex;
  flex: 1;
`;

const MealCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  /* margin: 10px 0px 10px 0px; */
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

const MealView = styled.View`
  margin: 10px 0px 10px 0px;
`;
const MealText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const Card = styled.View`
  flex: 1;
  background-color: white;
  padding: 10px;
`;

const CardView = styled.View``;
const NameText = styled.Text`
  font-size: 18;
  font-weight: 500;
  color: black;
`;
const ValueText = styled.Text`
  font-size: 18;
  font-weight: 600;
  color: black;
  margin-left: 5px;
`;
