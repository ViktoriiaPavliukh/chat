import { createStore } from 'redux';

import rootReducer from './rootReducer';

export default createStore(rootReducer);

export type { IState } from './rootReducer';