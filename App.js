import React, { useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AboutAppScreen from './screens/about-app';
import StockPricesScreen from './screens/stock-prices';

import { NAME_SCREENS } from './utils/constants';

const Tab = createBottomTabNavigator();

export const AppNavigator = () =>{ 

  return (
  <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === `${NAME_SCREENS.STOCK_PRICES_TITLE}`) {
          iconName = focused
            ? 'bar-chart'
            : 'bar-chart-outline';
        } else if (route.name === `${NAME_SCREENS.ABOUT_APP_TITLE}`) {
          iconName = focused 
          ? 'ios-information-circle' 
          : 'ios-information-circle-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      showIcon: true
    })}
    >
      <Tab.Screen name={NAME_SCREENS.ABOUT_APP_TITLE} component={AboutAppScreen} />
      <Tab.Screen name={NAME_SCREENS.STOCK_PRICES_TITLE} component={StockPricesScreen} />
    </Tab.Navigator>
  )
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
};

export default App;