// store.ts
import { createStore, combineReducers } from 'redux';
import { authReducer } from './authStore/authReducer';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

// Type for the entire state of the application
export type RootState = ReturnType<typeof rootReducer>;

// Create Redux store
const store = createStore(rootReducer);

// Export the store
export default store;
