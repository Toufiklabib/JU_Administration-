import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';

const Home = () => {


    const navigation = useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerShown : false
      })
  },[])
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({});