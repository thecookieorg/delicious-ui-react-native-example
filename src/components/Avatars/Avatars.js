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
import Avatar from '../../ui/Avatar';

const Avatars = ({ navigation }) => {
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
        <Avatar 
          imageSource={{uri: 'https://api.adorable.io/avatars/285/abott@adorable.png'}}
          size={60}
          isRounded={false}
          position="left"
        />

        <Avatar
          imageSource={{uri: 'https://api.adorable.io/avatars/285/fff@adorable.io.png'}}
          size={150}
          isRounded={true}
          position="center"
        />

        <Avatar
          imageSource={{uri: 'https://api.adorable.io/avatars/285/fjawwjwf@adorable.io.png'}}
          size={100}
          isRounded={false}
          position="right"
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

export default Avatars;
