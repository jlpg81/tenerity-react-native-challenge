import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import context from '../context/context';
import MyOffersItem from './MyOffersItem';

export default function MyOffersList() {
  const contextFunctions = useContext(context);
  const [total, setTotal] = useState(0);

  useEffect(() => {}, [contextFunctions.myOffers]);

  const calculatePrice = offerArray => {
    let currentTotal = 0;
    const myOffersArray = offerArray.filter(offer =>
      contextFunctions.myOffers.has(offer.id)
    );
    for (let index = 0; index < myOffersArray.length; index++) {
      currentTotal = currentTotal + myOffersArray[index].price;
    }
    console.log('calculating currentTotal');
    console.log(currentTotal);

    if (currentTotal !== total) {
      setTotal(currentTotal);
    }
  };

  calculatePrice(contextFunctions.offers);

  return (
    <View>
      {contextFunctions.offers
        .filter(offer => contextFunctions.myOffers.has(offer.id))
        .map((offer, key) => (
          <MyOffersItem
            offer={offer}
            key={key}
            // setMyOffers={contextFunctions.setMyOffers}
            // setTotal={setTotal}
          />
        ))}
      <Text style={styles.totalPrice}>Total Price: {total}</Text>
      {/* <Text style={styles.totalPrice}>Total Price: {currentTotal}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  totalPrice: {
    margin: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});
