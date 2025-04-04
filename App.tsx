import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { CategoryScreen } from './screens/CategoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <CategoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 32,
  },
});
