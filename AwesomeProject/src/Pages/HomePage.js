import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import LogoImage from '../assets/logo.png';
import OfferList from '../components/OfferList';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const goToMyOffers = () => {
    navigation.navigate('MyOffers');
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
  scrollView: {
    flex: 1,
    flexDirection: 'column',
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
  placeholderWrapper: {
    marginTop: 32,
  },
  placeholderTitle: {
    fontSize: 24,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  myOffers: {
    fontSize: 20,
  },
});

export default HomePage;
