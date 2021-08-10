import React, { useEffect, useState, useContext } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoImage from '../assets/logo.png';
import OfferList from '../components/OfferList';
import context from '../context/context';

const HomePage = () => {
  const navigation = useNavigation();
  const contextFunctions = useContext(context);

  const goToMyOffers = () => {
    console.log('gogo');
    navigation.navigate('MyOffersPage');
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentWrapper}>
        <View style={styles.logoWrapper}>
          <Image source={LogoImage} style={styles.logoImage} />
          <TouchableOpacity onPress={goToMyOffers}>
            <Text style={styles.myOffers}>My Offers</Text>
          </TouchableOpacity>
        </View>
        <OfferList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    backgroundColor: 'red',
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '95%',
    height: '95%',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  logoImage: {
    width: 160,
    height: 55,
  },
  myOffers: {
    fontSize: 20,
  },
});

export default HomePage;
