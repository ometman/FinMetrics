import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const convert = require('xml-js');
import FlagStore from '../../components/flagStore';

const initialState = {
  allmetrics: [],
  isLoading: 'true',
  error: undefined,
};

// const indicatorCode = 'NY.GDP.MKTP.CD'; // GDP in current US dollars
const countries = 'NGA;GHA;SEN;MLI;BFA;NER;CIV;GIN;SLE;LBR;TGO;BEN;MRT;GMB;CPV';
const apiUrl = `https://api.worldbank.org/v2/country/${countries}/?format=json`;
export const fetchMetricsByThunk = createAsyncThunk(
  'indicator/fetchMetricsByThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(apiUrl);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const metricsDetailsSlice = createSlice({
  name: 'allmetrics',
  initialState,
  reducers: { },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMetricsByThunk.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(fetchMetricsByThunk.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.allmetrics.length = 15;
        const theMetrics = (metricsData = action.payload) => {
          const metricEntry = Object.entries(metricsData);
          for (let i = 0; i < 15; i += 1) {
            state.allmetrics.push({
              id: i,
              total: metricEntry[0][1].total,
              flagImage: FlagStore[i],
              adminregion: metricEntry[1][1][i].adminregion,
              capitalCity: metricEntry[1][1][i].capitalCity,
              countryid: metricEntry[1][1][i].id,
              incomeLevel: metricEntry[1][1][i].incomeLevel,
              iso2Code: metricEntry[1][1][i].iso2Code,
              latitude: metricEntry[1][1][i].latitude,
              lendingType: metricEntry[1][1][i].lendingType,
              longitude: metricEntry[1][1][i].longitude,
              name: metricEntry[1][1][i].name,
              region: metricEntry[1][1][i].region,
            });
          }
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
