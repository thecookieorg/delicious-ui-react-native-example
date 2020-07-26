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
import Button from '../../ui/Button';

const Home = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const { container } = styles;

  return (
    <ScrollView style={[container, {backgroundColor: colorScheme === "dark" ? "#121212" : "#F9F9F9"}]}>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 10
        }}
      >
        <Button 
          title="Avatars"
          isLoading={false}
          onPress={() => navigation.push('Avatars')}
          type={'solid'}
          theme={colorScheme}
          variant={'sharp'}
          isRaised={true}
          titleColor={'#fff'}
          titleSize={14}
          buttonMarginBottom={10}
        />

        <Button 
          title="Buttons"
          isLoading={false}
          onPress={() => navigation.push('Buttons')}
          type={'solid'}
          theme={colorScheme}
          variant={'sharp'}
          isRaised={true}
          titleColor={'#fff'}
          titleSize={14}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home;
