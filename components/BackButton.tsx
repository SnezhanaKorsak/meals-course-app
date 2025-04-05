import { Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { Colors } from '../theme/colors';

export const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
      <Feather name="arrow-left" size={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});