import React, { createContext, useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import { ERRORS } from '../utils/constants';
import { getData } from '../services/data-service';
import ListItem from '../components/list-item';

const StockPricesScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setLoading(true);
      try {
        const data = await getData();
        console.log('data: ', data);
        setData(data);
      } catch (error) {
        console.log('error: ', error);
        setIsError(true);
      }
      setLoading(false);
    }
    fetchData();
    // setInterval(fetchData, 5000);
  }, [])
  
  let spare;
  // console.log('spare1: ', spare);
  
  if (data) {
    spare = data;
    // console.log('spare2: ', spare);
  }
  
  // const spareData = {...getSpareData()};
  // console.log('spareData: ', spareData);
  
  return(
    <ScrollView>
      <View style={styles.layout}>
        {isLoading && <Text>loading...</Text>}
        {isError && <View style={styles.itemWrapper}>
            <Text style={styles.title}>{ERRORS.BAD_REQUESTS}</Text>
          </View>
        }
        {data && Object.keys(spare).map((key) => (
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

export default StockPricesScreen;

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