import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { Title } from '../components/Title';
import { TypeRootStackParamList } from '../navigation/types';
import { MEALS } from '../data/dummy-data';

export const MealsOverViewScreen = () => {
  const { params } = useRoute<RouteProp<TypeRootStackParamList, 'MealsOverViewScreen'>>();

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(params.categoryId) >= 0);

  return (
    <View style={styles.container}>
      <Title title="Meals OverView" />
      <Text style={{ color: 'white' }}>Meals Over View Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});