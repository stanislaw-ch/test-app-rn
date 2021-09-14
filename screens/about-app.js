import React, { createContext, useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAME_SCREENS } from '../utils/constants';

const AboutAppScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>{NAME_SCREENS.ABOUT_APP_TITLE}</Text>
      <Text style={styles.text}>Приложение отображает таблицу котировок с биржи poloniex, обновляемые в фоне по таймеру</Text>

      <View style={styles.button}>
        <Button
          title={NAME_SCREENS.STOCK_PRICES_TITLE} 
          color="white"
          onPress={() => navigation.navigate(`${NAME_SCREENS.STOCK_PRICES_TITLE}`)}
        />
      </View>
    </View>
  );
}

export default AboutAppScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: "red",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    height: 40,
    width:160,
    borderRadius:10,
    backgroundColor : "tomato",
    marginLeft :50,
    marginRight:50,
    marginTop :20,
  },
});