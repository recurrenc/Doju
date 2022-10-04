import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const PHONE_REGEX = /^[6-9]\d{9}$/;
const IMEI_REGEX = /^[0-9]{15}(,[0-9]{15})*$/;

const AddRecord = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Add New Record</Text>
        <CustomInput
          name="name"
          placeholder="Name"
          control={control}
          rules={{
            required: 'Name is required!',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 character long.',
            },
            maxLength: {
              value: 50,
              message: 'Name should not be greater then 50 character.',
            },
          }}
        />
        <CustomInput
          name="fatherName"
          placeholder="Father's Name"
          control={control}
          rules={{
            required: "Father's Name is required!",
            minLength: {
              value: 3,
              message: "Father's must be at least 3 character long.",
            },
            maxLength: {
              value: 50,
              message: "Father's should not be greater then 50 character.",
            },
          }}
        />
        <CustomInput
          name="address"
          placeholder="Address & Pincode"
          control={control}
          rules={{
            required: 'Address is required!',
            minLength: {
              value: 6,
              message: 'Name must be at least 6 character long.',
            },
          }}
        />
        <CustomInput
          name="mobile"
          placeholder="Mobile Number"
          control={control}
          rules={{
            required: 'Mobile Number is required!',
            pattern: {
              value: PHONE_REGEX,
              message: 'Mobile Number is invalid!',
            },
          }}
        />
        <CustomInput
          name="imei"
          placeholder="IMEI Number"
          control={control}
          rules={{
            required: 'IMEI Number is required!',
            pattern: {
              value: IMEI_REGEX,
              message: 'IMEI Number is invalid!',
            },
          }}
        />
        <CustomInput
          name="fir"
          placeholder="FIR / Section"
          control={control}
          rules={{
            required: 'FIR Section is required!',
          }}
        />
        <CustomInput
          name="description"
          placeholder="Description"
          control={control}
          rules={{
            required: 'Description is required!',
          }}
        />
        <CustomInput
          name="chass"
          placeholder="Chass Number"
          control={control}
          rules={{
            required: 'Chass Number is required!',
          }}
        />
        <CustomInput
          name="engilne"
          placeholder="Engilne Number"
          control={control}
          rules={{
            required: 'Engilne Number is required!',
          }}
        />
        <CustomButton
          text={'Register'}
          onPress={handleSubmit(onRegisterPressed)}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default AddRecord;
