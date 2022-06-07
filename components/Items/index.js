/*
 * ---------------------------------------------
 * Author: Kier Yu
 * Date:   Monday April 18th 2022
 * Last Modified by: Kier Yu - <kier@healthnow.ph>
 * Last Modified time: April 18th 2022, 7:47:35 pm
 * ---------------------------------------------
 */

import React, {useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Items = (props) => {

  return (
    <TouchableOpacity style={styles.item} onPress={() => props.onItemPress({name: props.name,price: props.price})}>
      <Text style={styles.itemName}>{props.name}</Text>
      <Text style={styles.itemPrice}>{props.price}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FEDD42',
    width: '48%',
    padding: 15,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: '1%',
  },
  itemName: {
    fontSize: 16,
    color: '#8d5700', 
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 30,
    color: '#000', 
    fontWeight: 'bold',
  }
})

export default Items