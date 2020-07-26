import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native-appearance';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

const Home = ({ navigation }) => {
  const colorScheme = useColorScheme();

  const { container } = styles;

  return (
    <ScrollView style={[container, {backgroundColor: colorScheme === "dark" ? "#121212" : "#F9F9F9"}]}>
      <TouchableOpacity onPress={() => navigation.push('RecentTransactions')} style={styles.recentTransactionsButton}>
        <Text style={styles.recentTransactionsButtonText}>See all transactions</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recentTransactionsButton: {
    backgroundColor: '#3eae1f',
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  recentTransactionsButtonText: {
    color: '#fff', 
    alignSelf: 'center', 
    fontSize: 14, 
    fontWeight: '500'
  }
})

export default Home;
