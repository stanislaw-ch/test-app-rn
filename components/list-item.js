import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = ({ name, last, highestBid, percentChange}) => {

  return (
      <View style={styles.itemWrapper}>

        <View style={styles.leftWrapper}>
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>last: {last}</Text>
          </View>
        </View>

        <View style={styles.rightWrapper}>
          <Text style={styles.title}>highestBid: {highestBid}</Text>
          <Text style={styles.subtitle}>percentChange: {percentChange}</Text>
        </View>

      </View>
      )
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 15,
    marginBottom: 5,
    paddingBottom: 7,
    paddingTop: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: 'white'
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1fa1b1",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: "gray",
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
})

export default ListItem