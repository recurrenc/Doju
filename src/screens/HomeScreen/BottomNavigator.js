import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import RecentAdded from './RecentAdded';
import AllRecord from './AllRecord';
import AddRecord from './AddRecord';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Recent':
              iconName = 'time-slot';
              break;
            case 'All Record':
              iconName = 'flow-tree';
              break;
            case 'Add Record':
              iconName = 'evernote';
              break;
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Recent" component={RecentAdded} />
      <Tab.Screen name="All Record" component={AllRecord} />
      <Tab.Screen name="Add Record" component={AddRecord} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default BottomNavigator;
