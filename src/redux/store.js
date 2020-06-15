import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import uuidGenerator from './middleware/uuidGenerator';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, uuidGenerator))
);
