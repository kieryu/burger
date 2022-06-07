/*
 * ---------------------------------------------
 * Author: Kier Yu
 * Date:   Monday April 18th 2022
 * Last Modified by: Kier Yu - <kier@healthnow.ph>
 * Last Modified time: April 18th 2022, 7:59:24 pm
 * ---------------------------------------------
 */

import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Items from '../Items'
import _ from 'lodash'

const MainLayout = () => {

  const [orderItems, setOrderItems] = useState([])
  let totalPrice = 0

  const handlePress = (value) => {
    setOrderItems([...orderItems, value])
  }

  const handleClearOrder = () => {
    setOrderItems([])
  }

  return (
    <View style={styles.mainContainer}>
      {!_.isEmpty(orderItems) && (
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.orderSummary}>Order Summary</Text>
          <View style={styles.items}>
            {
              orderItems.map((item, index) => {
                
                totalPrice = parseInt(item.price) + totalPrice

                return (
                  <Text>● {item.name} - {item.price}</Text>
                )
              })
            }
            <Text style={styles.totalPrice}>Total: {totalPrice}</Text>
          </View>
          <Button 
            title="Clear Order" 
            color="#de5c5c" 
            onPress={handleClearOrder} 
          />
        </View>
      )}
      <Text style={styles.sectionTitle}>Burgers: Buy 1, Take 1</Text>
      <View style={styles.menuContainer}>
        <Items name="Burger Regular" price="29" onItemPress={handlePress}/>
        <Items name="Burger w/ Egg" price="45" onItemPress={handlePress}/>
        <Items name="Cheeseburger" price="39" onItemPress={handlePress}/>
        <Items name="CB w/ Egg" price="49" onItemPress={handlePress}/>
      </View>
      <Text style={styles.sectionTitle}>Hotdog: Buy 1, Take 1</Text>
      <View style={styles.menuContainer}>
        <Items name="Sandwich" price="39" onItemPress={handlePress}/>
        <Items name="On Stick" price="29" onItemPress={handlePress}/>
      </View>
      <Text style={styles.sectionTitle}>Solo Burger</Text>
      <View style={styles.menuContainer}>
        <Items name="Burger" price="20" onItemPress={handlePress}/>
        <Items name="Burger w/ Egg" price="25" onItemPress={handlePress}/>
        <Items name="Cheeseburger" price="22" onItemPress={handlePress}/>
        <Items name="CB w/ Egg" price="29" onItemPress={handlePress}/>
        <Items name="Double CB" price="49" onItemPress={handlePress}/>
        <Items name="Egg Sandwich" price="15" onItemPress={handlePress}/>
        <Items name="Quarterpounder" price="50" onItemPress={handlePress}/>
        <Items name="QP w/ Cheese" price="55" onItemPress={handlePress}/>
        <Items name="QP Cheese Egg" price="55" onItemPress={handlePress}/>
      </View>
      <Text style={styles.sectionTitle}>Solo Hotdog</Text>
      <View style={styles.menuContainer}>
        <Items name="Sandwich" price="20" onItemPress={handlePress}/>
        <Items name="On Stick" price="15" onItemPress={handlePress}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d85959',
    marginVertical: 10,
  },
  items: {
    marginBottom: 10,
  },
  orderSummary: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  totalPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green'
  }
})

export default MainLayout