import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';


class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Login'))
        }, 3000)
    }

    render() {
        return (
            <View style={styles.splash}>
              <Image 
                source={require('../assets/logogilbi.png')} 
                style={styles.logo}
                />
              </View>
                );
    }
}

const styles = StyleSheet.create({
  splash:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },
  logo:{
    width: 180,
    height:85
  }
});

export default Splash;
