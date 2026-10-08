import { Image, View, Text, StyleSheet } from 'react-native';
//import {  Text, StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
   container: {
    padding: 20,
  },
  text: {
    color: 'blue',
    fontSize: 24,
    fontWeight: '700',
  },
  separator: {
    height: 10,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
});


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View>
    {/* source={require(item.ownerAvatarUrl) */}
  <Image 
    style={styles.stretch}
    source={{ uri: item.ownerAvatarUrl }}>
    </Image>

  <>
  <Text onPress={onPress} style={[styles.item, {backgroundColor}]}>
    FullName: {item.fullName}{'\n'}
    Description: {item.description}{'\n'}
    Language: {item.language}{'\n'}
    ForksCount: {item.forksCount}{'\n'}
    StargazersCount: {item.stargazersCount}{'\n'}
    RatingAverage: {item.ratingAverage}{'\n'}
    ReviewCount: {item.reviewCount}{'\n'}
    OwnerAvatarUrl: {item.ownerAvatarUrl}{'\n'}
  </Text>
  </>
  </View>
  
);


const RepositoryItem = ({item}) => {
    //const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const backgroundColor = '#6eab8e';
    //const color = item.id === selectedId ? 'white' : 'black';
    const color = item.id === 'black';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

export default RepositoryItem;