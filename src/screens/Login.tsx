import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Switch, Animated, Easing } from 'react-native';
import {State} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../features/authSlice';
import { setUser } from '../features/userSlice';
import { debounce } from '../utils/utility'

const LoginScreen: React.FC = ({navigation}: any) => {
  const dispatch = useDispatch();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('')

  const [toggle, setToggle] = useState(false)
  const animated  = useRef(new Animated.Value())

  // const handleLogin = () => {
  //   const userData = { username, password };
    
    

    

  //   navigation.navigate('Transfers');
  // };

  // const checkifUsernameIsAvailable = debounce(500,
  //   (username: string, setError: string) => {
  //     dispatch(setUser(username));
  //     setError(setError);
  //   },
  // );


  const handleToggle = () => {
    setToggle(true)
    Animated.timing({
      toValue: toggle,
      duration: 230,
      easing: Easing.bounce,
      delay:0
    }).start
    
  }


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Login</Text>

      <Switch
        value={toggle}
        onValueChange={handleToggle}
      
      />
      <TextInput
        placeholder="Username"
        onChangeText={username => checkifUsernameIsAvailable(username)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <Text>{error}</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
