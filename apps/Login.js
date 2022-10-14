import auth from '@react-native-firebase/auth'
import React, { useEffect, useState }  from 'react';
import { StyleSheet,Text,View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(()=>{
    const navHome = auth().onAuthStateChanged(user=>{
      if(user){
        navigation.navigate("Home")
      }
    })
    return navHome
  }, [])

  const handleLogin = () => {
    auth()
    .signInWithEmailAndPassword(email,password)
    .then(userCredetial => {
      const user = userCredetial.user
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
        <Text style={styles.text}>Login</Text>
        <View style={styles.loginUserPass}>
          <Text>Username</Text>
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
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={{
            fontSize: 16, color: '#fff', letterSpacing: 3}} 
            onPress={handleLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonSignup} 
          onPress={()=> navigation.navigate("Signup")}>
          <Text>Signup</Text>
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
  buttonLogin:{
    borderWidth: 1,
    width: 300,
    height: 55,
    backgroundColor: '#2B2B2B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignup:{
    borderWidth: 1,
    width: 300,
    height: 55,
    borderColor: '#2B2B2B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
});

export default Login;
