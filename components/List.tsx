import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../theme/colors';

type Props = {
  data: string[];
};

export const List = ({ data }: Props) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.softOrange,
  },
  itemText: {
    color: Colors.brownTone,
    textAlign: 'center',
  },
});