import { View, Text, StyleSheet } from 'react-native';
import { Title } from '../components/Title';

export const MealsOverViewScreen = () => {
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