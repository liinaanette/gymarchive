import { combineReducers } from 'redux';
import trainingReducer from './trainingReducer';

const rootReducer = combineReducers({
  trainingReducer: trainingReducer,
});

export default rootReducer;
