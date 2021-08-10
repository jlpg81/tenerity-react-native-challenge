import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import context from '../context/context';

export default function MyOffersItem({ offer }) {
  const contextFunctions = useContext(context);

  const removeHandler = () => {
    console.log('removing', offer.id);
    const newSet = contextFunctions.myOffers;
    newSet.delete(offer.id);
    console.log(newSet);
    contextFunctions.setMyOffers(newSet);
  };

  return (
    <View style={styles.myOfferItemContainer}>
      <Text style={styles.itemText}>{offer.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.itemText}>{offer.price}</Text>
        <Text onPress={removeHandler} style={styles.removeButton}>
          Remove
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myOfferItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  removeButton: {
    marginLeft: 20,
  },
  itemText: {
    fontSize: 18,
  },
});
