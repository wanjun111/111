import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './combin'
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

