import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import root reducer
import rootReducer from './reducers/rootReducer'

import comments from './data/comments'
import posts from './data/posts'

// create an object for the default data

const defaultState = {
  posts,
  comments
}

// console.log(defaultState)

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
