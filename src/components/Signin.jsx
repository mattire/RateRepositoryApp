import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const styles = StyleSheet.create({
  textInput: {
    //marginTop: Constants.statusBarHeight,
    borderWidth : 1,
    backgroundColor: '#fff',
    marginTop: 5,
    marginLeft : 15,
    marginRight: 15,
    borderRadius: 4,
    padding: 2
  },
  button: {
    borderWidth : 1,
    backgroundColor: '#cdf',
    marginTop: 5,
    marginLeft : 15,
    marginRight: 15,
    borderRadius: 4,
    
    padding: 8,
    textAlign: 'center'
  }
});

const initialValues = {
  userName: '',
  passWord: '',
};

const validationSchema = yup.object().shape({
  userName: yup.string()
    .required('Username is required'),
  passWord: yup
    .string()
    .required('Password is required'),
});


const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="UserName"
        value={formik.values.userName}
        onChangeText={formik.handleChange('userName')}
      />
      {formik.touched.userName && formik.errors.userName && (
        <Text style={{ color: 'red' }}>{formik.errors.userName}</Text>
      )}
      <TextInput 
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Password"
        value={formik.values.passWord}
        onChangeText={formik.handleChange('passWord')}
      />
      {formik.touched.passWord && formik.errors.passWord && (
        <Text style={{ color: 'red' }}>{formik.errors.passWord}</Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
    console.log(`here`);
    const onSubmit = values => {
        console.log(`****`);
        const un = values.userName;
        const pw = values.passWord;
        console.log(`do login here with ${un} and ${pw}`);

        if (!isNaN(un) && !isNaN(pw) && pw !== 0) {
            console.log('non nan');
        }
    };

    return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;