import {View, Text, StyleSheet, Image, NativeModules} from 'react-native';
import React from 'react';
import IC from '../../../assets/images/logo.png';
import CustomButton from '../../components/CustomButton';
import {removeSession} from '../../../services/AsyncStorage';

const NavigationView = () => {
  const handleLogout = async () => {
    try {
      await removeSession();
      NativeModules.DevSettings.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.headerContainer}>
        <Image style={styles.user} source={IC} resizeMode="cover" />
        <Text style={styles.username}>Sonu Kumar</Text>
        <Text style={styles.email}>sonu@developer.com</Text>
      </View>

      <View style={styles.buttonView}>
        <CustomButton text={'Share'} />
        <CustomButton text={'Rate Us'} />
        <CustomButton text={'-> Log out'} onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  user: {
    width: 75,
    height: 75,
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 50,
  },
  username: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#6a7ead',
  },
  headerContainer: {
    padding: 16,
    backgroundColor: '#0c152b',
  },
  buttonView: {
    padding: 16,
  },
});

export default NavigationView;
