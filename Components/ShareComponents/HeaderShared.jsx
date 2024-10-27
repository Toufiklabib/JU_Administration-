import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import auth from '../../Firebase/Firebase.init';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
const HeaderShared = ({name}) => {

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
     <FontAwesome name="user" size={50} color="white" style={{width:45,height:45,borderRadius:99}}   />
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
     <Ionicons name="notifications-sharp" size={35} color="white" onPress={()=>router.replace('/(tabs)/notification')} />
     </View>
     </View>
   
    <View style={{
       marginTop:20,
    }} >
        <Text style={{
        
        fontFamily:'outfit-bold',
        fontSize:25,
        textAlign:'center',
        color:Colors.WHITE,

        }} >{name}</Text>
    </View>
 

    </View>
  )
};

export default HeaderShared;

const styles = StyleSheet.create({})