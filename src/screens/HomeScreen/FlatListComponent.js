import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';

const FlatListComponent = ({data}) => {
  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View style={styles.item}>
        <Text style={styles.title}>Name: {item.name}</Text>
        <Text style={styles.title}>Father's Name: {item.fatherName}</Text>
        <Text style={styles.title}>Address: {item.address}</Text>
      </View>
    );
  };
  return (
    <>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <SafeAreaView style={styles.root}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 5,
    color: 'black',
    fontWeight: '500',
  },
});
export default FlatListComponent;
