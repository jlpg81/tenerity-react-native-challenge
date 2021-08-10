import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import OfferItem from './OfferItem';

import context from '../context/context';

export default function OfferList() {
  const contextFunctions = useContext(context);

  const toggleOffer = id => {
    if (contextFunctions.myOffers.has(id)) {
      const newSet = contextFunctions.myOffers;
      newSet.delete(id);
      contextFunctions.setMyOffers(newSet);
    } else {
      const newSet = contextFunctions.myOffers.add(id);
      contextFunctions.setMyOffers(newSet);
    }
  };

  return (
    <context.Consumer>
      {({ myOffers }) => (
        <ScrollView>
          {contextFunctions.offers
            .filter(offer => offer.promoted)
            .map(offer => (
              <OfferItem
                offer={offer}
                key={offer.id}
                tags={contextFunctions.tags}
                active={myOffers?.has(offer.id)}
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
                active={myOffers?.has(offer.id)}
                toggleOffer={toggleOffer}
              />
            ))}
        </ScrollView>
      )}
    </context.Consumer>
  );
}

const styles = StyleSheet.create({});
