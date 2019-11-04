import {compose,createStore,applyMiddleware} from 'redux';
import { createLogger }  from 'redux-logger';
import thunkMiddleware  from 'redux-thunk';
import reducers from './reducers'

const loggedInMiddleware = createLogger({ predicate: (getstate,actiion) => __DEV__ })

function configureStore(initialstate){
    const enhancer = compose(applyMiddleware(loggedInMiddleware,thunkMiddleware))

    return createStore(reducers,initialstate,enhancer);
}

export default configureStore({});