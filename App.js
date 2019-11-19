import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Font, Icon } from 'expo'
import { Provider } from 'react-redux'
import store from './store'
import FlashMessage from 'react-native-flash-message'
import AppNavigator from './navigation/AppNavigator'

// Ignore yellow timeout error
// https://stackoverflow.com/questions/44603362/setting-a-timer-for-a-long-period-of-time-i-e-multiple-minutes/48778011#48778011
// https://github.com/ably/ably-js-react-native/issues/9
import { YellowBox } from 'react-native'
import _ from 'lodash'

YellowBox.ignoreWarnings(['Setting a timer'])
const _console = _.clone(console)
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message)
  }
}

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
let firebase = require('firebase/app')
// Add the Firebase products that you want to use
require('firebase/auth')
require('firebase/firestore')

//Prob should put this in some .env lol
const firebaseConfig = {
  apiKey: 'AIzaSyAwEPXeL9ZA634FI60qE6ie1-VS2nQQGlI',
  authDomain: 'corsell-app-firebase.firebaseapp.com',
  databaseURL: 'https://corsell-app-firebase.firebaseio.com',
  projectId: 'corsell-app-firebase',
  storageBucket: '',
  messagingSenderId: '1016742205830',
  appId: '1:1016742205830:web:35a643e26f0e1f02'
}

export default class App extends Component {
  state = {
    isLoadingComplete: false,
    client: null,
    loginSuccess: false
  }

  componentDidMount () {
    firebase.initializeApp(firebaseConfig)
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'montserrat-regular': require('./assets/fonts/Montserrat-Medium.ttf'),
        'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
        'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-black': require('./assets/fonts/Montserrat-Black.ttf'),
        antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
        antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  render () {
    const Root = () => {
      return (
        <>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppNavigator />
          <FlashMessage position='top' />
        </>
      )
    }

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          <Provider store={store}>
            <Root />
          </Provider>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})