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

const HomeDrawer = () => {
  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={NavigationView}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => drawer.current.openDrawer()}>
          <Icon name="menu" size={30} color="#3c76a6" />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#100b30',
  },
});

export default HomeDrawer;
