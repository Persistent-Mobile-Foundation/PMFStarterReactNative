import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import colors from './assets/styles/colors';
import {WLAuthorizationManager} from 'react-native-ibm-mobilefirst';

const App = () => {
  const [message, setMessage] = useState('');
  const pingPMFServer = () => {
    WLAuthorizationManager.obtainAccessToken('').then(
      (token: any) => {
        console.log('-->  pingMFP(): Success ', token);
        setMessage('Successfully connected to PMF server');
      },
      (error: any) => {
        console.error(error);
        setMessage('Failed to connect PMF Server');
      },
    );
  };

  // const subscribeTags = () => {};
  return (
    <View style={styles.screenbg}>
      <View style={styles.containerImg}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/images/side-menu-logo.jpeg')}
        />
      </View>
      <TouchableOpacity onPress={() => pingPMFServer()}>
        <View style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Ping PMF Server</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.responseText}>{message}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 150,
  },
  screenbg: {
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.buttonColor,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    color: colors.textColor,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  responseText:{
    padding: 10,
    margin: 20,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  }
});
export default App;
