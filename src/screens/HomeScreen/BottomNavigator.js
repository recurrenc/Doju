import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            console.log('Route ' + route.name);
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
        <Tab.Screen name="Add Record" component={AddNew} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const RecentAdded = () => {
  return (
    <View>
      <Text>One</Text>
    </View>
  );
};
const AllRecord = () => {
  return (
    <View>
      <Text>AllRecord</Text>
    </View>
  );
};
const AddNew = () => {
  return (
    <View>
      <Text>AddNew</Text>
    </View>
  );
};

export default BottomNavigator;
