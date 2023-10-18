import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const convert = require('xml-js');

const initialState = {
  allmetrics: [],
  isLoading: 'true',
  error: undefined,
};

export const fetchMetricsByThunk = createAsyncThunk(
  'nasdaqmetrics/fetchRocketsByThunk',
  async (endPoint = 'symbol/NASDAQ?apikey=267079fb217e483f814c25746ccbdd47', { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/${endPoint}`);
      const all = [];
      for (let i = 0; i < 12; i += 1) {
        all.push(data[i]);
      }
      return all;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const metricsDetailsSlice = createSlice({
  name: 'allmetrics',
  initialState,
  reducers: {
  
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMetricsByThunk.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(fetchMetricsByThunk.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.allmetrics.length = 12;
        const theMetrics = (metricsData = action.payload) => {
          const metricsEntries = Object.entries(metricsData);
          metricsEntries.forEach((metricEntry) => {
            state.allmetrics.push({
              id: metricEntry[0],
              symbol: metricEntry[1].symbol,
              name: metricEntry[1].name,
              price: metricEntry[1].price,
              changesPercentage: metricEntry[1].changesPercentage,
              change: metricEntry[1].change,
              dayLow: metricEntry[1].dayLow,
              dayHigh: metricEntry[1].dayHigh,
              yearHigh: metricEntry[1].yearHigh,
              yearLow: metricEntry[1].yearLow,
              marketCap: metricEntry[1].marketCap,
              priceAvg50: metricEntry[1].changesPercentage,
              priceAvg200: metricEntry[1].priceAvg200,
              exchange: metricEntry[1].exchange,
              volume: metricEntry[1].volume,
              avgVolume: metricEntry[1].avgVolume,
              open: metricEntry[1].open,
              previousClose: metricEntry[1].previousClose,
              eps: metricEntry[1].eps,
              pe: metricEntry[1].pe,
              earningsAnnouncement: metricEntry[1].earningsAnnouncement,
              sharesOutstanding: metricEntry[1].sharesOutstanding,
              timestamp: metricEntry[1].timestamp,
            });
          });
        };
        theMetrics();
      })
      .addCase(fetchMetricsByThunk.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  extraReducers,
} = metricsDetailsSlice.actions;
export default metricsDetailsSlice.reducer;
