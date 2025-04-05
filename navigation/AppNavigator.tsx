import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoryScreen } from '../screens/CategoryScreen';
import { MealsOverViewScreen } from '../screens/MealsOverViewScreen';
import { MealDetailsScreen } from '../screens/MealDetailsScreen';

import { TypeRootStackParamList } from './types';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CategoryScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#24180f' },
        animation: 'slide_from_right',
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="MealsOverViewScreen" component={MealsOverViewScreen} />
      <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};