import React, { useEffect, useState, useContext } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  View,
} from 'react-native';

export default function OfferItem({ offer, tags, active, toggleOffer }) {
  const [activeSwitch, setActiveSwitch] = useState(active);

  const handleToggleOffer = () => {
    setActiveSwitch(!activeSwitch);
    toggleOffer(offer.id);
  };

  useEffect(() => {
    setActiveSwitch(active);
  }, [active]);

  return (
    <TouchableOpacity onPress={handleToggleOffer}>
      <View style={styles.titleView}>
        <Text style={styles.offerTitle}>{offer.title}</Text>
        <Switch value={activeSwitch} onChange={handleToggleOffer}></Switch>
      </View>
      <View style={styles.rowContainer}>
        <Image style={styles.imageContainer} source={{ uri: offer.image }} />

        <View>
          <View style={styles.topInfo}>
            <Text style={styles.offerText}>{offer.price}$</Text>
            <Text style={styles.offerText} numberOfLines={3}>
              {offer.description}
            </Text>
          </View>

          <View>
            {offer.tagIds.map(number =>
              tags
                .filter(tag => tag.id === number)
                .map(item => (
                  <Text style={styles.promotionText} key={number}>
                    {item.text}
                  </Text>
                ))
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 100,
  },
  offerTitle: {
    fontSize: 20,
  },
  imageContainer: {
    height: 140,
    width: 140,
  },
  topInfo: {
    flex: 1,
    flexDirection: 'column',
    width: '78%',
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 10,
    flex: 1,
  },
  offerText: {
    marginLeft: 10,
    fontSize: 16,
  },
  promotionText: {
    marginLeft: 10,
    color: 'red',
    fontSize: 16,
  },
});
