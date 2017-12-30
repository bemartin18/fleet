import { StyleSheet } from 'react-native'
import { orange, blue } from './colors'

const buttons = StyleSheet.create({
  standard: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 60,
    marginTop: 10
  },
  orange: {
    backgroundColor: orange
  },
  blue: {
    backgroundColor: blue
  },
  text: {
    color: 'white'
  }
})

export default buttons
