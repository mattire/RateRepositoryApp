import { Text, TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';

const initialValues = {
  userName: '',
  passWord: '',
};

const SignIn = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View>
      <TextInput
        placeholder="UserName"
        value={formik.values.mass}
        onChangeText={formik.handleChange('userName')}
      />
      <TextInput
        placeholder="Password"
        value={formik.values.height}
        onChangeText={formik.handleChange('passWord')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

// const SignIn = () => {
//   return <Text>The sign-in view</Text>;
// };

export default SignIn;