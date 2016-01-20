import React, {
  AppRegistry,
  Component
} from 'react-native'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore({})

class PasswordStore extends Component {
  render () {
    return <Provider store={store}>
      <App />
    </Provider>
  }
}

AppRegistry.registerComponent('PasswordStore', () => PasswordStore)
