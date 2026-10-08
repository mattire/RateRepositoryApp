import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList  from './RepositoryList';
import AppBar  from './AppBar';

import Text from './Text';


const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    //flexDirection: 'column-reverse',
    backgroundColor: 'lightgray',
    flex: 1,
  },
  flexContainer: {
    flexDirection: 'row',
  },
  flexItemA: {
    flexGrow: 0,
    backgroundColor: 'green',
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: 'cyan',
    paddingBottom:10
  },
});

const Callback = () => {
  console.log('logging');
}

const Main = () => {
  console.log('Loading?')
  return (
    <>
    <View style={styles.container}>
        <AppBar title='Repositories' onBack={() => { Callback(); console.log('Hello') }}></AppBar>
        <Text color="textSecondary" fontWeight='bold' fontSize="subheading">Simple text</Text>
        <Text>Simple text</Text>
        {/* <View style={styles.flexItemB}>
            <Text style={styles.flexItemB}>Text with custom style 21124</Text>
            <Text style={{ paddingTop: 10 }}>Text with custom style2</Text>
        </View> */}
        {/* <Text>Rate Repository Application X2</Text> */}
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <RepositoryList></RepositoryList>
    </View>
    </>
  );
};

export default Main;