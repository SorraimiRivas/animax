import {SafeAreaView} from 'react-native';
import {StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonCard from './src/components/CommonCard';
import axios from 'axios';

const App = () => {
  const {list, setList} = useState([]);

  const getAnimeList = () => {
    axios
      .request({
        method: 'get',
        baseURL: 'https://api.jikan.moe/v4/anime',
        params: {
          limit: 20,
          order_by: 'title',
        },
      })
      .then(data => setList([...list, ...data.data]));
  };

  console.log(list);

  useEffect(() => {
    getAnimeList();
  }, []);

  return (
    <SafeAreaView>
      <CommonCard />
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default App;
