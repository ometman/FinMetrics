import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './metricsdetails/metricsDetailsSlice';

const store = configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});

export default store;
