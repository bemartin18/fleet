import { StackNavigator } from 'react-navigation'
import LandingPage from './LandingPage'
import SignUp from './SignUp'

const RootNavigator = StackNavigator(
  {
    LandingPage: {
      screen: LandingPage
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    headerMode: 'none'
  }
)

export default RootNavigator
