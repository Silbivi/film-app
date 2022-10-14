import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet,Text,View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'

function Home() {

  const navigation = useNavigation()

  const [films, setFilms] = useState([])
  
  useEffect(() =>{
    const getFilms = async () => {
      const {data} = await axios.get("https://ghibliapi.herokuapp.com/films");

      setFilms(data)
    }

    getFilms()
  }, [])


  const Logout = () => {
    auth()
    .signOut()
    .then(() => navigation.navigate("Login"));
  }

  return (
    <ScrollView style={styles.home}>
      <View style={styles.header}>
        <Image 
        source={require('../assets/logogilbi.png')} 
        style={styles.logo}
        />
        <TouchableOpacity onPress={Logout}>
          <Text style={{marginTop:20}}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listAnime}>
          {films.map(film => (
            <View style={styles.listView} key={film.id}>
              <Image 
                source={{ uri: film.image }}
                style={{width:80, height:110, marginVertical: 10, marginHorizontal:10, borderRadius: 8}}
              />
              <View style={{width:200}}>
                <Text style={{marginVertical: 10, marginHorizontal:10, fontSize:17, fontWeight:'500'}}>{film.title}</Text>
                <Text style={{marginHorizontal: 10, fontSize:12}}>{film.original_title}</Text>
                <Text style={{marginHorizontal: 10, marginVertical: 10}}>Time : {film.running_time}</Text>
                <Text style={{marginHorizontal: 10, textAlign:'right', color: '#E26868', fontWeight:'500'}}>{film.rt_score}</Text>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    marginTop: 20
  },
  logo: {
    width: 100,
    height: 50
  },
  listAnime: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  listView: {
    width: 310,
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  }
});

export default Home;