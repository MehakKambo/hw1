import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TabTwoPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Page 2</Text>
      <Text style={styles.subtitle}>We love CSS 545 Mobile Computing</Text>
      <Text style={styles.subtitle}>Expo simplifies the development process with tools and services for building React Native apps.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    color: '#666',
  },
});
