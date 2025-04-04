import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

import { CategoryGridTile } from '../components/CategoryGridTile';

export const CategoryScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CategoryGridTile categoryItem={item} />}
      numColumns={2}
    />
  );
};