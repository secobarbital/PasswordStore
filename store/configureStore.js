/* global __DEV__ */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const prodMiddleware = [ thunk ]
const devMiddleware = __DEV__
  ? [ require('redux-logger')() ]
  : []
const middleware = [ ...prodMiddleware, ...devMiddleware ]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer)
}
