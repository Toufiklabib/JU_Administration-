import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '../../constants/Colors';
const _layout = () => {
  return (
    <Tabs screenOption={{headerShown:false,tabBarActiveTintColor:Colors.WHITE}}>
      
      <Tabs.Screen name="home" 
        options={{
          tabBarLabel:"Home",
         tabBarIcon:({color})=><FontAwesome name="home" size={40} color={color} />
        }}
        />


         <Tabs.Screen name="transection" 
         options={{
          tabBarLabel:"Transection",
         tabBarIcon:({color})=><FontAwesome6 name="money-check-dollar" size={40} color={color} />
        }}
         />
        
        <Tabs.Screen name="profile" 
         options={{
          tabBarLabel:"Profile",
         tabBarIcon:({color})=><FontAwesome name="user" size={40} color={color}/>
        }}
        
        />
         



    </Tabs>
  )
};

export default _layout;

const styles = StyleSheet.create({})