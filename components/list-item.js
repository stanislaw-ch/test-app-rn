import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { observer } from "mobx-react-lite";
import { COLORS } from '../constants';

const ListItem = ({ name, last, highestBid, percentChange}) => {
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  
  function onChange(value) {
    let colorStyles;
    const prevAmount = usePrevious(value);
    if (prevAmount) {
      if(prevAmount > value) {
        colorStyles = {
          color: COLORS.green,
          fontWeight: "700"
        };
      }
      if(prevAmount < value) {
        colorStyles = {
          color: COLORS.red,
          fontWeight: "700"
        };
      }
      
      if(prevAmount === value) {
        colorStyles = {
          color: COLORS.gray,
        };
      }
    };
    return colorStyles;
  }
    

  return (
      <View style={styles.itemWrapper}>

        <View style={styles.leftWrapper}>
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name.replace('_', '/')}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.subtitle]}>last: </Text>
              <Text style={[styles.subtitle, onChange(last)]}>{last}</Text>
            </View>
          </View>
        </View>

        <View style={styles.rightWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.subtitle]}>highest bid: </Text>
            <Text style={[styles.subtitle, onChange(highestBid)]}>{highestBid}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.subtitle]}>percent change: </Text>
            <Text style={[styles.subtitle, onChange(percentChange)]}>{Math.round(percentChange * 100) / 100}%</Text>
          </View>
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
    backgroundColor: COLORS.white
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
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.black,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: COLORS.gray,
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
})

export default observer(ListItem);