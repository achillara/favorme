import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Feed: {
      screen: FeedScreen,
    },
    Exchange: {
      screen: ExchangeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
            break;
          case 'Feed':
            iconName = Platform.OS === 'ios'
              ? `ios-globe${focused ? '' : '-outline'}`
              : 'md-globe';
            break;
          case 'Exchange':
            iconName = Platform.OS === 'ios'
              ? `ios-git-compare${focused ? '' : '-outline'}`
              : 'md-git-compare';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `ios-settings${focused ? '' : '-outline'}`
              : 'md-settings';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
