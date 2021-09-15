import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import { ERRORS } from '../utils/constants';
import { getData } from '../services/data-service';
import ListItem from '../components/list-item';

import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { dataStore } from '../store/data-store';
const store = dataStore();


const StockPricesScreen = () => {
  useEffect(() => {
    runInAction(() => {
      store.setIsLoading(true);
    })
    const fetchData = async () => {
      try {
        const data = await getData();
        store.setIsLoading(false);
        store.setData(data);
      } catch (error) {
        console.warn(error);
        store.setIsError(true);
        store.setIsLoading(false);
      }
      store.setIsLoading(false);
    }
    fetchData();
    // setInterval(fetchData, 5000);
  }, [])
  
  const isLoading = store.isLoading;
  const isError = store.isError;
  const data = store.data;
  
  return(
    <ScrollView>
      <View style={styles.layout}>
        {isLoading && <Text>loading...</Text>}
        {isError && <View style={styles.itemWrapper}>
            <Text style={styles.title}>{ERRORS.ERROR}</Text>
          </View>
        }
        {data && Object.keys(data).map((key) => (
          <ListItem 
            key={data[key].id}
            name={key}
            last={data[key].last}
            highestBid={data[key].highestBid}
            percentChange={data[key].percentChange}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default observer(StockPricesScreen);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    color: "red",
  },
  error: {
    color: "white",
    backgroundColor: "red",
    width: "100%",
    height: 50,
    textAlign: "center",
    fontSize: 20,
  },
  itemWrapper: {
    paddingHorizontal: 15,
    marginBottom: 5,
    paddingBottom: 7,
    paddingTop: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'red'
  },
  title: {
    fontSize: 14,
    color: "white",
  },
});