import React, { createContext, useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import { ERRORS } from '../utils/constants';
import { getData } from '../services/data-service';
import ListItem from '../components/list-item';

const StockPricesScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
      setLoading(true);
      // !data.error && setLoading(true);
    }
    fetchData();
  }, [])
  
  // console.log('data: ', data.length);
  // const getSpareData = () => {
  //   if (!data) {
  //     return 
  //   }
  //   const spare = {...data};
  //   return spare
  // }

  // const spareData = {...getSpareData()};
  // console.log('spareData: ', spareData);
  
  const getLoading = () => {
    // if (data.error) {
    //   return
    // }
    return !isLoading && <Text>loading...</Text>
  }

  return(
    <ScrollView>
      <View style={styles.layout}>
        {getLoading()}
        {!data && <View style={styles.itemWrapper}>
            <Text style={styles.title}>{ERRORS.BAD_REQUESTS}</Text>
          </View>
        }
        {data && Object.keys(spareData).map((key) => (
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