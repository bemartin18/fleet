import { StyleSheet } from 'react-native'

const containers = StyleSheet.create({
  fill: {
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  landingPage: {
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  logo: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  }
})

export default containers
