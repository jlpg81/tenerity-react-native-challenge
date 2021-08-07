import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import OfferItem from './OfferItem';

export default function OfferList() {
  const [offers, setOffers] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/offers')
      .then(response => response.json())
      .then(data => setOffers(data))
      .catch(e => console.log(e));

    fetch('http://10.0.2.2:3000/tags')
      .then(response => response.json())
      .then(data => setTags(data))
      .catch(e => console.log(e));
  }, []);

  return (
    <ScrollView>
      {offers
        .filter(offer => offer.promoted)
        .map(offer => (
          <OfferItem offer={offer} key={offer.id} tags={tags} />
        ))}
      {offers
        .filter(offer => !offer.promoted)
        .map(offer => (
          <OfferItem offer={offer} key={offer.id} tags={tags} />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
