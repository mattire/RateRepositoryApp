//import Constants from 'expo-constants';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Route, Routes, Navigate , useNavigate, Link } from 'react-router-native';



import RepositoryList  from './RepositoryList';
import SignIn  from './Signin';
import AppBar  from './AppBar';

import Text from './Text';


const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexDirection: 'column',
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

const AppBarTab = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ marginRight: 20 }}>
      <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>{label}</Text>
    </Pressable>
  );
}


const Callback = () => {
  console.log('logging');
}

// const navigate = (str) => {
//   //Navigate(to={str})
//   console.log(str);
  
// }


const Main = () => {
  console.log('Loading?')
  const navigate = useNavigate();
  return (
    <>
    <View style={styles.container}>
        <AppBar title='Repositories' onBack={() => { Callback(); console.log('Hello') }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <AppBarTab label="Repositories" onPress={() => navigate('Repositories')} />
            <AppBarTab label="Sign in" onPress={() => navigate('SignIn')} />
            <AppBarTab label="Reviews" onPress={() => navigate('Reviews')} />
          </ScrollView>
        </AppBar>
        <Text color="textSecondary" fontWeight='bold' fontSize="subheading">Simple text</Text>
        <Text>Simple text</Text>
        {/* <View style={styles.flexItemB}>
            <Text style={styles.flexItemB}>Text with custom style 21124</Text>
            <Text style={{ paddingTop: 10 }}>Text with custom style2</Text>
        </View> */}
        {/* <Text>Rate Repository Application X2</Text> */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/Repositories" element={<RepositoryList />} />
          <Route path="/" element={<RepositoryList />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          {/* <Route path="*" element={<Navigate to="/signin" replace />} /> */}
        </Routes>
        {/* <RepositoryList></RepositoryList> */}
    </View>
    </>
  );
};

export default Main;