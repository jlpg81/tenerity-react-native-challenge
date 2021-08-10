import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import OfferItem from './OfferItem';

import context from '../context/context';

export default function OfferList() {
  const contextFunctions = useContext(context);

  const toggleOffer = id => {
    if (contextFunctions.myOffers.has(id)) {
      console.log('toggling');
      const newSet = contextFunctions.myOffers;
      newSet.delete(id);
      console.log(newSet);
      contextFunctions.setMyOffers(newSet);
    } else {
      console.log('toggling2');
      const newSet = contextFunctions.myOffers.add(id);
      console.log(newSet);
      contextFunctions.setMyOffers(newSet);
    }
  };

  return (
    <ScrollView>
      {contextFunctions.offers
        .filter(offer => offer.promoted)
        .map(offer => (
          <OfferItem
            offer={offer}
            key={offer.id}
            tags={contextFunctions.tags}
            active={contextFunctions.myOffers?.has(offer.id)}
            toggleOffer={toggleOffer}
          />
        ))}
      {contextFunctions.offers
        .filter(offer => !offer.promoted)
        .map(offer => (
          <OfferItem
            offer={offer}
            key={offer.id}
            tags={contextFunctions.tags}
            active={contextFunctions.myOffers?.has(offer.id)}
            toggleOffer={toggleOffer}
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
