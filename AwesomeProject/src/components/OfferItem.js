import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function OfferItem({ offer, tags }) {
  const itemPressed = () => {
    console.log('pressed ', offer.title);
  };

  return (
    <TouchableOpacity onPress={itemPressed}>
      <Text style={styles.offerTitle}>{offer.title}</Text>
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
  offerTitle: { fontSize: 20 },
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
    // backgroundColor: 'red',
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
