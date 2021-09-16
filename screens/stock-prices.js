import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ActivityIndicator, Animated, Easing } from 'react-native';
import { ERRORS } from '../utils/constants';
import { getData } from '../services/data-service';
import ListItem from '../components/list-item';

import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { dataStore } from '../store/data-store';

const UPDATE_INTERVAL = 5000;
const store = dataStore();


const StockPricesScreen = () => {
  const translation = useRef(new Animated.Value(400)).current;
  const easing = () => {
    Animated.timing(translation, {
      toValue: 0,
      duration: 3500,
      easing: Easing.bounce,
      useNativeDriver: true
    }).start();
  };

  const navigation = useNavigation();
  useEffect(() => {
    runInAction(() => {
      store.setIsLoading(true);
    })
    const fetchData = async () => {
      try {
        const data = await getData();
        store.setIsError(false);
        store.setIsLoading(false);
        store.setData(data);
      } catch (error) {
        console.warn(error);
        store.setIsError(true);
        store.setIsLoading(false);
      }
      store.setIsLoading(false);
    }
    let updateByInterval;
    navigation.addListener('focus', () => {
      fetchData();
      easing();
      updateByInterval = setInterval(fetchData, UPDATE_INTERVAL);
    });
    navigation.addListener('blur', () => {
      clearInterval(updateByInterval);
    });
  }, [])
  
  const isLoading = store.isLoading;
  const isError = store.isError;
  const data = store.data;
  
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.layout}>
          {isLoading && <ActivityIndicator size="large" color="#1fa1b1" />}
          {isError && <View style={styles.itemWrapper}>
              <Text style={styles.title}>{ERRORS.ERROR}</Text>
            </View>
          }
          {data && Object.keys(data).map((key) => (
            <Animated.View key={data[key].id} style={{ transform: [{ translateY: translation }] }}>
              <ListItem
                name={key}
                last={data[key].last}
                highestBid={data[key].highestBid}
                percentChange={data[key].percentChange}
              />
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#FC6222'
  },
  title: {
    fontSize: 14,
    color: "white",
  },
});