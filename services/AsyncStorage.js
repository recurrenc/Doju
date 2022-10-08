import AsyncStorage from '@react-native-async-storage/async-storage';

const storeSession = async value => {
  try {
    await AsyncStorage.setItem('session', value);
  } catch (error) {
    console.log(error.message);
  }
};

const getSession = async () => {
  try {
    const session = await AsyncStorage.getItem('session');
    if (session !== null) {
      return session;
    }
  } catch (error) {
    console.log(error);
  }
};

const removeSession = async () => {
  try {
    await AsyncStorage.removeItem('session');
  } catch (error) {
    console.log(error);
  }
};

export {storeSession, getSession, removeSession};
