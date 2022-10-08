import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import FlatListComponent from './FlatListComponent';

const AllRecord = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const row = await fetch(
        'http://192.168.1.3:8000/api/record/getAllRecord',
      );
      const dt = await row.json();
      setData(dt.records);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <>{data.length > 0 && <FlatListComponent data={data} />}</>;
};

export default AllRecord;
