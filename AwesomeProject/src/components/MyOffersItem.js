import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import context from '../context/context';

export default function MyOffersItem({ offer }) {
  const contextFunctions = useContext(context);

  const removeHandler = () => {
    contextFunctions.myOffers.delete(offer.id);
    const newSet = Array.from(contextFunctions.myOffers);
    contextFunctions.setMyOffers(new Set(newSet));
  };

  return (
    <View style={styles.myOfferItemContainer}>
      <Text style={styles.itemText}>{offer.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.itemText}>{offer.price}</Text>
        <Icon
          name="remove"
          color="#FF0000"
          onPress={removeHandler}
          style={styles.removeButton}
          size={20}
        >
          Remove
        </Icon>
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
    width: 20,
    height: 20,
  },
  itemText: {
    fontSize: 18,
  },
});
