import { RouteProp, useRoute } from '@react-navigation/native/';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import { List } from '../components/List';
import { Subtitle } from '../components/Subtitle';
import { MealDetails } from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

import { TypeRootStackParamList } from '../navigation/types';
import { Title } from '../components/Title';

export const MealDetailsScreen = () => {
  const { params } = useRoute<RouteProp<TypeRootStackParamList, 'MealDetailsScreen'>>();

  const mealId = params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) return null;

  return (
    <>
      <Title title={selectedMeal.title} />
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});