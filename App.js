import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Amplify, { Analytics } from 'aws-amplify'
import AWSExports from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'

// window.LOG_LEVEL = 'DEBUG'

// debugger
// console.log('debugger started')
Amplify.configure(AWSExports)

class App extends React.Component {
  render () {
    Analytics.record('appRender')
    return (
      <View style={styles.container}>
        <Text>Heyoooo!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default withAuthenticator(App)
