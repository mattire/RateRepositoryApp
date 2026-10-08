import { Image, View, Text, StyleSheet } from 'react-native';
//import {  Text, StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
   container: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',      // image and text side by side
    alignItems: 'center',      // vertically center content in the row
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  itemTxtContainer :
  {
    flexDirection: 'column', 
    backgroundColor: '#fff',     
    borderRadius: 2,
  },
  stats:{
    flexDirection: 'row', 
    backgroundColor: '#fff',
    padding: 2,
  },
  stat:{
    flexDirection: 'column', 
    alignItems: 'center',   
    backgroundColor: '#fff',
    padding: 10,
  },
  colorbox:{
    flexGrow: 0,
    margin: 10,
    backgroundColor: '#3bf',
  },
  boldText:{
    fontWeight:'700'
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
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
    width:  50,
    height: 50,
    resizeMode: 'stretch',
    margin: 24,
  },
});

const Stat = ({title, amount}) => {
  return (    
    <View style={styles.stat}>
      <Text style={styles.boldText}>{amount}</Text>
      <Text>{title}</Text>
    </View>
  )}


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View style={styles.item} >
  <Image 
    style={styles.stretch} 
    source={{ uri: item.ownerAvatarUrl }}>
    </Image>

  <View style={styles.itemTxtContainer} >
    <Text style={styles.title}> {item.fullName} </Text>
    <Text onPress={onPress} style={[styles.flexItemB, {backgroundColor}]}>
      {item.description}{'\n'}
    </Text>
    <Text style={styles.colorbox}>{item.language}</Text>
    <View style={styles.stats}>
      <Stat title={'Stars'}   amount={item.stargazersCount}></Stat>
      <Stat title={'Forks'}   amount={item.forksCount}>     </Stat>
      <Stat title={'Reviews'} amount={item.reviewCount}>    </Stat>
      <Stat title={'Rating'}  amount={item.ratingAverage}>  </Stat>
    </View>
  </View>
  </View>
  
);



const RepositoryItem = ({item}) => {
    //const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    //const backgroundColor = '#6eab8e';
    const backgroundColor = '#fff';
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