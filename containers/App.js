import React, {
  Component,
  NativeModules,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const { PGPManager } = NativeModules

export default class App extends Component {
  render () {
    return <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
      <TouchableHighlight onPress={this.loadKeys}>
        <Text>Load keys</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.encryptFile}>
        <Text>Encrypt</Text>
      </TouchableHighlight>
    </View>
  }

  loadKeys () {
    console.log('loadKeys')
    PGPManager.importKeysFromURL('http://localhost:8000/pubkey.asc', false)
    console.log('after loadKeys')
  }

  encryptFile () {
    console.log('encryptFile')
    PGPManager.encryptFileFromURL('http://localhost:8000/decrypted.txt', '979E4B03DFFE30C6', (err, encrypted) => {
      console.log('after encryptFile', encrypted)
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});
