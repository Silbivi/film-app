import auth from '@react-native-firebase/auth'
import React, { useState }  from 'react';
import { StyleSheet,Text,View, Image, TextInput, TouchableOpacity } from 'react-native';


function Signup() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = () => {
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then(userCredetial => {
      const user = userCredetial.user
      console.log(user.email)
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.login}>
      <View style={styles.loginLogo}>
      <Image 
        source={require('../assets/logo3.png')} 
          style={styles.logoImg}
        />
        </View>
      <View style={styles.loginText}>
        <Text style={styles.text}>Signup</Text>
        <View style={styles.loginUserPass}>
          <Text>Email</Text>
          <TextInput 
            style={styles.textInput} 
            onChangeText={text => setEmail(text)}
            value={email}>
          </TextInput>
          <Text>Password</Text>
          <TextInput 
            secureTextEntry={true} 
            style={styles.textInput} 
            onChangeText={pass => setPassword(pass)}
            value={password}>
          </TextInput>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={handleSignup}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffff'
  },
  loginLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  logoImg:{
    width: 100,
    height:100
  },
  loginText:{
    marginTop: 20,
    marginVertical: 30,
    marginHorizontal: 30
  },
  text: {
    fontWeight: 'bold',
    fontSize: 23
  },
  loginUserPass:{
    marginTop: 30,
    marginBottom: 10
  },
  textInput:{
    borderColor: '#D8D8D8',
    borderWidth: 1,
    width: 300,
    height: 45,
    marginVertical: 15,
    borderRadius: 10
  },
  button:{
    borderWidth: 1,
    width: 300,
    height: 55,
    backgroundColor: '#2B2B2B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    color: '#fff',
    fontSize: 16,
    letterSpacing: 3
  }
});

export default Signup;
