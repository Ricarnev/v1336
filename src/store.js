import {createStore, compose, applyMiddleware} from 'redux';
import { rootReducer } from './reducers';

const initialState = {};
const enhancers = [];
const composedEnhancers = compose(
 applyMiddleware(),
 ...enhancers,
);
export const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
   );