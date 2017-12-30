import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LandingPage from './src/components/LandingPage'
import containers from './src/styles/containers'

export default class App extends Component {
  render() {
    return (
      <View style={containers.fill}>
        <LandingPage />
      </View>
    )
  }
}
