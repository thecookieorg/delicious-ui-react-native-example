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

const Buttons = ({ navigation }) => {
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
          title="Log in"
          isLoading={false}
          type='solid'
          buttonBackground='#2e86de'
          variant='sharp'
          isRaised={false}
          titleColor='#fff'
          titleSize={14}
          buttonMarginBottom={15}
        />

        <Button 
          title="Add to Cart"
          buttonBackground='#ff9f43'
          isLoading={false}
          type='solid'
          variant='sharp'
          isRaised={true}
          titleColor='#222f3e'
          titleSize={14}
          buttonMarginBottom={15}
        />

        <Button 
          title="REGISTER"
          buttonBackground='#f368e0'
          isLoading={false}
          type='solid'
          variant='rounded'
          isRaised={false}
          titleColor='#fff'
          titleSize={14}
          buttonMarginBottom={15}
        />

        <Button 
          title="Outline Sharp"
          buttonBackground='#fff'
          buttonBorderColor='#f368e0'
          isLoading={false}
          type='outline'
          variant='sharp'
          isRaised={false}
          isLoading={false}
          titleColor="#f368e0"
          titleSize={14}
          buttonMarginBottom={15}
        />

        <Button 
          title="Outline Rounded"
          buttonBackground='#341f97'
          isLoading={false}
          type='solid'
          variant='rounded'
          isLoading={false}
          spinnerColor='#fff'
          spinnerSize="large"
          titleSize={14}
          buttonMarginBottom={15}
          isRaised={false}
        />

        <Button 
          buttonBackground='#fff'
          buttonBorderColor="#341f97"
          isLoading={false}
          type='outline'
          variant='rounded'
          isRaised={false}
          isLoading={true}
          spinnerColor='#341f97'
          spinnerSize="large"
          titleSize={14}
          buttonMarginBottom={15}
          isRaised={true}
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

export default Buttons;
