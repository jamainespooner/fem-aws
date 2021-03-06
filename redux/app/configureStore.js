import { createStore, applyMiddleware, compose, } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import reducer from './reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  // const middlewares = [thunk]

  // if (process.env.NODE_ENV !== 'production') {
  //   middlewares.push(logger)
  // }
  return createStore(
    reducer,
    composeEnhancers(
      // applyMiddleware(...middlewares)
    )
  )
}

const store = configureStore()

export default store