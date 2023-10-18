import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import DetailsData from './DetailsData';
import { fetchMetricsByThunk } from '../redux/metricsdetails/metricsDetailsSlice';

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
    <div className="rockets">
      {allmetrics.length > 0 ? (
        <div className="rockets-container">
          {allmetrics.map((metric) => <DetailsData key={metric.id} metric={metric} />)}
        </div>
      ) : (
        <p className="no-rockets">
          <i>Currently, No Data Metrics</i>
        </p>
      )}
    </div>
  );
}
