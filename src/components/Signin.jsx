import { Text, TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';

const initialValues = {
  userName: '',
  passWord: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View>
      <TextInput
        placeholder="UserName"
        value={formik.values.userName}
        onChangeText={formik.handleChange('userName')}
      />
      <TextInput
        placeholder="Password"
        value={formik.values.passWord}
        onChangeText={formik.handleChange('passWord')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text>Login</Text>
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