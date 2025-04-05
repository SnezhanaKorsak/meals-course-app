import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../theme/colors';

type Props = {
  children: React.ReactNode;
};

export const Subtitle = ({ children }: Props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.softOrange,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: Colors.softOrange,
    borderBottomWidth: 2,
  },
});