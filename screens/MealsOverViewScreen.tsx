import { View, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { Title } from '../components/Title';
import { TypeRootStackParamList } from '../navigation/types';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealItem } from '../components/MealItem';

export const MealsOverViewScreen = () => {
  const { params } = useRoute<RouteProp<TypeRootStackParamList, 'MealsOverViewScreen'>>();

  const categoryId = params.categoryId;
  const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title || 'Meals' +
    ' OverView';

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

  const renderMealItem = (itemData: { item: typeof displayedMeals[number] }) => {
    const item = itemData.item;

    const mealItemProps = {
      mealId: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    };
    return (
      <MealItem {...mealItemProps} />
    );
  };

  return (
    <View style={styles.container}>
      <Title title={categoryTitle} />
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});