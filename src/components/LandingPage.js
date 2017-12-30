import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import containers from './../styles/containers'
import buttons from './../styles/buttons'
import { orange, blue } from './../styles/colors'

const LandingPage = () => {
  return (
    <View style={[containers.fill, containers.landingPage]}>
      <View style={[containers.fill, containers.logo]}>
        <Image
          source={require('./../../public/images/logo.png')}
          style={{ width: 191, height: 60 }}
        />
        <Text>URBAN TRANSIT, FASTER.</Text>
      </View>

      <View style={[containers.fill, { paddingTop: 20 }]}>
        <TouchableOpacity style={[buttons.standard, buttons.orange]}>
          <Text style={buttons.text}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[buttons.standard, buttons.blue]}>
          <Text style={buttons.text}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LandingPage
