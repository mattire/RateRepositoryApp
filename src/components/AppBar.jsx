import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  bar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 16, 
        paddingTop: Constants.statusBarHeight, 
        paddingBottom: 12, backgroundColor: '#50a6b8', elevation: 4 },
  title: { flex: 1, color: '#fff', fontSize: 20, fontWeight: '600', marginHorizontal: 12 },
  icon: { color: '#fff', fontSize: 22 },
  // ...
});

const AppBar = ({ title, onBack, right }) => {
  
  return (
    <View style={styles.bar}>
    {/* ... <View style={styles.container}> */}
    {onBack && 
      <Pressable onPress={onBack}>
        <Text style={styles.icon}>←</Text>
      </Pressable>}
      <Text style={styles.title}>{title}</Text>
      {/* <Text>{title}</Text> */}
      <View>{right}</View>
    </View>);
};

export default AppBar;