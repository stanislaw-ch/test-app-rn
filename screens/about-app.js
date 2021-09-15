import React from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAME_SCREENS } from '../utils/constants';

const AboutAppScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.layout}>
      <Image source={require('../assets/clipart4246799.png')}/>
      <Text style={styles.title}>{NAME_SCREENS.ABOUT_APP_TITLE}</Text>
      <Text style={styles.text}>Приложение отображает таблицу котировок с биржи poloniex, которая обновляется в фоне по таймеру</Text>

      <View style={styles.button}>
        <Button
          title={NAME_SCREENS.STOCK_PRICES_TITLE} 
          color="white"
          onPress={() => navigation.navigate(`${NAME_SCREENS.STOCK_PRICES_TITLE}`)}
        />
      </View>
    </SafeAreaView>
  );
}

export default AboutAppScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
  },
  title: {
    fontSize: 27,
    marginTop: 50,
    marginBottom: 0,
  },
  text: {
    fontSize: 16,
    marginBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    height: 40,
    width:160,
    borderRadius:10,
    backgroundColor : "#FC6222",
    marginLeft :50,
    marginRight:50,
    marginTop : 0,
    marginBottom: 130,
  },
});