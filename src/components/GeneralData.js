import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import DetailsData from './DetailsData';
import { fetchMetricsByThunk } from '../redux/metricsdetails/metricsDetailsSlice';
import WestAfricaMap
  from '../assets/WestAfricaMap.webp';

export default function GeneralData() {
  const { allmetrics, isLoading, error } = useSelector((store) => store.metrics);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === 'true') {
      dispatch(fetchMetricsByThunk());
    }
  }, [dispatch, isLoading, error]);

  if (isLoading === 'pending') {
    return (<p>loading data...</p>);
  }

  if (error) return (<p>Oops! Seems something went wrong</p>);

  return (
    <div className="allmetrics">
      <ul className="metric-head-container">
        <li className="metric-head-image">
          <img src={WestAfricaMap} className="metric-head-image" alt="West Africa Countries" />
        </li>
        <li className="metric-head-info">
          {allmetrics.length > 0
          && (
          <>
            <h3>World Bank Indicators</h3>
            {' '}
            <h3>{allmetrics[17].region.value}</h3>
            {' '}
            <h4>
              {allmetrics[17].total}
              {' '}
              Countries
            </h4>
          </>
          )}
        </li>
      </ul>
      {allmetrics.length > 0 ? (
        <div className="data-container">
          {allmetrics.map((metric) => <DetailsData key={metric.id} metric={metric} />)}
        </div>
      ) : (
        <p className="no-metrics">
          <i>Currently, No Data Metrics</i>
        </p>
      )}
    </div>
  );
}
