import { StyleSheet, View, Text } from 'react-native';
import { BackButton } from './BackButton';
import { Colors } from '../theme/colors';

type Props = {
  title: string;
}

export const Title = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent,
    marginBottom: 16,
  },

  title: {
    flex: 1,
    fontSize: 26,
    color: Colors.accent,
    textAlign: 'center',
  },
});