import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images, NAME_SCREENS } from '../constants';

const AboutAppScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.layout}>
      <Image source={images.aboutImage}/>
      <Text style={styles.title}>{NAME_SCREENS.ABOUT_APP_TITLE}</Text>
      <Text style={styles.text}>Приложение отображает таблицу котировок с биржи 
        <Text style={{color: '#068485', fontWeight: "bold", textTransform: 'uppercase'}}> poloniex</Text>
        , которая обновляется в фоне по таймеру.
      </Text>

      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate(`${NAME_SCREENS.STOCK_PRICES_TITLE}`)} 
          style={styles.appButtonContainer}
          >
          <Text style={styles.appButtonText}>{NAME_SCREENS.STOCK_PRICES_TITLE}</Text>
        </TouchableOpacity>
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
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#068485",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 110,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }
});