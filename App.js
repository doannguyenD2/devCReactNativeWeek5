import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setloading] = useState(0);
  const load = setTimeout(() => {
    setloading(loading + 1);
  }, 100);
  if (loading <= 10) {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: "Montserrat", fontWeight: "bold", fontSize: 20, padding: 10 }}>Fetching {loading*10}% </Text>
        <ActivityIndicator size="large" loading={loading} />
      </View>
    );
  }
  clearTimeout(load);
  return (
    <View style={styles.container}>
      <Text>Fetched</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
