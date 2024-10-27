import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';

import TransectionLIst from '../../Components/Transection/TransectionLIst';
import HeaderShared from '../../Components/ShareComponents/HeaderShared';
const Transection = () => {
    
    const navigation = useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerShown : false,
      })
  },[])
  return (
    <View>
     {/* header */}
    <HeaderShared  name='Transection' />
     {/* transectionllist */}
     <TransectionLIst />
     
    </View>
  )
};

export default Transection;

const styles = StyleSheet.create({})