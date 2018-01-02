import { Facebook } from 'expo'
import { Alert } from 'react-native'

export default async function facebookLogIn() {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    '593105477687940',
    {
      permissions: ['public_profile']
    }
  )
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    )
    Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`)
  }
}
