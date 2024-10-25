import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';

const Transection = () => {
    
    const navigation = useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerShown : false
      })
  },[])
  return (
    <View>
      <Text>Transection</Text>
    </View>
  )
};

export default Transection;

const styles = StyleSheet.create({})