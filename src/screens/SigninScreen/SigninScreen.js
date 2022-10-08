import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  NativeModules,
} from 'react-native';
import React from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {storeSession} from '../../../services/AsyncStorage';
import {useLoginUserMutation} from '../../../services/userAuthApi';
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SigninScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const [loginUser] = useLoginUserMutation();

  const onSignInPress = async data => {
    console.log('Data ', data);
    const user = await loginUser(data);
    console.log(user);
    if (user.data.status === 'success') {
      await storeSession(user.data.token);
      NativeModules.DevSettings.reload();
    } else {
      console.log(user.data.message);
    }
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  // const onSignupPressed = () => {
  //   navigation.navigate('SignUp');
  // };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={(styles.logo, {height: height * 0.25})}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="email"
          name="email"
          control={control}
          rules={{
            required: 'Username is required!',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email is invalid!',
            },
          }}
        />
        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password should be atleast 8 character long',
            },
          }}
        />
        <CustomButton text={'Sign In'} onPress={handleSubmit(onSignInPress)} />
        <CustomButton
          text={'Forgot Password'}
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        {/* <SocialAuthentication />
        <CustomButton
          text={`Don't have an Account? Create One`}
          onPress={onSignupPressed}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 28,
  },
  logo: {
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default SigninScreen;
