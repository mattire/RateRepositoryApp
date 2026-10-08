import Main from './src/components/Main';

const App = () => {
  return <Main />;
};

export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable, Alert, Platform } from 'react-native';

// const HelloWorld = props => {
//   return <Text>Hello world!</Text>;
// };

// const PressableText = props => {
//   //const {alrtTxt, pressTxt} = props;
//   const alrtTxt = props.alrtTxt;
//   const pressTxt = props.pressTxt;
//   console.log(alrtTxt);
//   console.log(pressTxt);
//   // onPress={() => Alert.alert('You pressed the text!')}
//   {/* <Text>You can press me</Text> */}
//   return (
//     <Pressable
//       onPress={() => {
//         if (Platform.OS === 'web') {
//          console.log('Running in browser');
//          alert(alrtTxt);
//         } else {
//           console.log('Running in mobile app');
//           Alert.alert(alrtTxt)}
//         }
//       }
//     >
//       <Text>{pressTxt}</Text>
//     </Pressable>
//   );
// };

// export default function App() {
//   console.log('test');
//   return (
//     <View style={styles.container}>
//       <Text>aa</Text>
//       <PressableText alrtTxt = 'aa1' pressTxt = 'aa2'></PressableText>
//       <HelloWorld></HelloWorld>
//       <Text>React native app, Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
