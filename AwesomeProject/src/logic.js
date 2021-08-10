const getUser = fetch('http://10.0.2.2:3000/users')
  .then(response => response.json())
  //   .then(data => {
  //     setUser(data[0].name);
  //     setMyOffers(new Set(data[0].selectedOffers));
  //   })
  .catch(e => console.log('error fetching: ', e));

const getOffers = fetch('http://10.0.2.2:3000/offers')
  .then(response => response.json())
  //   .then(data => setOffers(data))
  .catch(e => console.log('error fetching: ', e));

const getTags = fetch('http://10.0.2.2:3000/tags')
  .then(response => response.json())
  //   .then(data => setTags(data))
  .catch(e => console.log('error fetching: ', e));

export default { getUser, getOffers, getTags };
