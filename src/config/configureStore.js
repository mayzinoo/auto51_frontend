import { createStore, combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import reducers from '../reducers';
const rootreducers = combineReducers({...reducers})


const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptTransform({
    secretKey: 'ReactAppSecret',
    onError: function(error) {
      console.log(error)
    }
  })]

}

const persistedReducer = persistReducer(persistConfig, rootreducers)

export const store =
    createStore(
      persistedReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        latency: 0
      })
    );

export const persistor = persistStore(store)