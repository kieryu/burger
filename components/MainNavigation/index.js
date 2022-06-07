/*
 * ---------------------------------------------
 * Author: Kier Yu
 * Date:   Monday April 18th 2022
 * Last Modified by: Kier Yu - <kier@healthnow.ph>
 * Last Modified time: April 18th 2022, 4:58:51 pm
 * ---------------------------------------------
 */

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const MainNavigation = () => {
  return (
    <View style={styles.mainNavigation}>
      <TouchableOpacity style={styles.navItem}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/burger.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/history.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

  
const styles =  StyleSheet.create({
  mainNavigation: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }, 
  navItem: {
    width: '50%',
    paddingVertical: 15,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopWidth: 1, 
    borderRightWidth: 1,
    borderColor: "#DEDEDE",
  },
  'navItem:last-child': {
    borderRightWidth: 0,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
})

export default MainNavigation