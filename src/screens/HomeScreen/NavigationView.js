import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import IC from '../../../assets/images/logo.png';
import CustomButton from '../../components/CustomButton';

const NavigationView = () => {
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
        <CustomButton text={'-> Log out'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  email: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'gray',
  },
  headerContainer: {
    backgroundColor: '#dec076',
  },
  buttonView: {},
});

export default NavigationView;
