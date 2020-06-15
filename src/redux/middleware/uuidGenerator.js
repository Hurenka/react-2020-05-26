import { v1 as uuid } from '../../../node_modules/uuid';

export default (store) => (next) => (action) => {
  console.log(uuid());
  console.log('before :', store.getState());
  next(action);
};
