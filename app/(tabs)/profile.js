import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';

const Profile = () => {

    
    const navigation = useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerShown : false
      })
  },[])
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
};

export default Profile;

const styles = StyleSheet.create({})