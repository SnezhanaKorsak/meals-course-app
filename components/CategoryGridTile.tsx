import { useNavigation } from '@react-navigation/native';
import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CATEGORIES } from '../data/dummy-data';
import { TypeRootStackParamList } from '../navigation/types';

type Props = {
  categoryItem: typeof CATEGORIES[number];
}

export const CategoryGridTile = ({ categoryItem }: Props) => {
  const { title, color, id } = categoryItem;

  const navigation = useNavigation<NativeStackNavigationProp<TypeRootStackParamList>>();

  const navigateToMealsPage = (categoryId: string) => () =>
    navigation.navigate('MealsOverViewScreen', { categoryId });

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={navigateToMealsPage(id)}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});