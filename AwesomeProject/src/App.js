import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator';
import Context from './context/context';

const App = () => {
  const [user, setUser] = useState();
  const [myOffers, setMyOffers] = useState();
  const [offers, setOffers] = useState([]);
  const [tags, setTags] = useState([]);

  const contextFunctions = {
    user,
    setUser,
    myOffers,
    setMyOffers,
    offers,
    setOffers,
    tags,
    setTags,
  };

  useEffect(() => {
    fetch('http://10.0.2.2:3000/users')
      .then(response => response.json())
      .then(data => {
        setUser(data[0].name);
        setMyOffers(new Set(data[0].selectedOffers));
      })
      .catch(e => console.log(e));

    fetch('http://10.0.2.2:3000/offers')
      .then(response => response.json())
      .then(data => setOffers(data))
      .catch(e => console.log(e));

    fetch('http://10.0.2.2:3000/tags')
      .then(response => response.json())
      .then(data => setTags(data))
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    console.log('myOffers', myOffers);
  }, [myOffers]);

  return (
    <Context.Provider value={contextFunctions}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
