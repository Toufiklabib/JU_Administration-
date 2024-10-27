import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';
import auth from '@/Firebase/Firebase.init';
const Header = () => {


    const user = auth.currentUser;
  return (
    <View style={{
        padding:20,
        paddingTop:60,
        backgroundColor:'#40A2D8',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    }} >
     <View style={{
     
     display:'flex',
     flexDirection:'row',
     gap:10,
     alignItems:'center'

     }} >
     <FontAwesome name="user" size={50} color="white" style={{width:45,height:45,borderRadius:99}} />
     <View>
        <Text 
        style={{
            fontSize:14,
            fontFamily:'outfit-bold',
            color:'white'
        }} >Welcome ,</Text>
        <Text style={{
            fontSize:19,
            fontFamily:'outfit-bold',
            color:'white'
        }} >{user?.email}</Text>
     </View>
    
     <View style={{marginLeft:100}} >
     <Ionicons name="notifications-sharp" size={35} color="white" />
     </View>
     </View>

    <View style={{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10,
        marginVertical:10,
        marginTop:15,
        borderRadius:8,
    }} >
    <Fontisto name="search" size={24} color="#40A2D8" />
    <TextInput  placeholder='Search..' />
    
    </View>

    </View>
  )
};

export default Header;

const styles = StyleSheet.create({})