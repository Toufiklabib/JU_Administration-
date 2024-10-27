import { Image, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

const CategoryItem  = ({category,onCategoryPress}) => {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)} >
     <View style={{padding:15,backgroundColor:Colors.SKY,  borderRadius:99, marginHorizontal:10, }} >
     <Image 
      source={{uri:category.iconURL}} 
      style={{width:40,height:40,}}
      ></Image>
     </View>
     <Text style={{
       fontFamily:'outfit-medium',
       textAlign:'center',
       marginTop:5,
     }} >{category.name}</Text>
    </TouchableOpacity>
  )
};

export default CategoryItem ;

const styles = StyleSheet.create({})