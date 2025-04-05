import { View, Text, StyleSheet } from 'react-native';

export const MealsOverViewScreen = () => {
  return (
    <View style={styles.container}>
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