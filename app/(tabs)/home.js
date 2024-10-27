import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import Header from '../../Components/Home/Header';
import Slider from '../../Components/Home/Slider';
import Category from '../../Components/Home/Category';

const Home = () => {


    const navigation = useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerShown : false
      })
  },[])
  return (
    <View>
     
     {/* header */}
   <Header></Header>

     {/* slider */}

    <Slider/>

     {/* catrgory */}
    <Category/>
     

    
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({});