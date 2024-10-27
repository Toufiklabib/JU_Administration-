import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import HeaderShared from '@/Components/ShareComponents/HeaderShared';
import { useNavigation } from 'expo-router';
import NotificationList from '@/Components/Notification/NotificationList';

const Notification = () => {

  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown : false,
    })
},[])



  
  return (
    <View>
      <HeaderShared name={`Notification`} ></HeaderShared>
      
       <NotificationList/>

    </View>
  )
};

export default Notification;

const styles = StyleSheet.create({})