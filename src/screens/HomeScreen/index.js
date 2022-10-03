import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import NavigationView from './NavigationView';
import Icon from 'react-native-vector-icons/Entypo';
import BottomNavigator from './BottomNavigator';

const HomeScreen = () => {
  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={NavigationView}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.container}
            onPress={() => drawer.current.openDrawer()}>
            <Icon name="menu" size={30} color="#3c76a6" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerCenter}>
          <Text style={[styles.headerText]}>RECORD-BOOK</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerText}>ABC</Text>
        </View>
      </View>
      <BottomNavigator />
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    // justifyContent: 'center',
    padding: 16,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  header: {
    flex: 0.08,
    flexDirection: 'row',
    backgroundColor: '#100b30',
  },
  headerText: {
    color: '#3c76a6',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 20,
  },
  headerLeft: {
    flex: 0.2,
  },
  headerCenter: {
    flex: 0.6,
    alignItem: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
