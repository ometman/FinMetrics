import React from 'react';
// import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import {
//   useDispatch,
//   useSelector,
// } from 'react-redux';
// import { fetchMetricsByThunk } from '../redux/metricsdetails/metricsDetailsSlice';

const MetricsDetails = ({ metric }) => {
  // const { allmetrics, isLoading, error } = useSelector((store) => store.metrics);
  // const dispatch = useDispatch();

  MetricsDetails.propTypes = {
    metric: PropTypes.node.isRequired,
    // id: PropTypes.string.isRequired,
    // symbol: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    // changesPercentage: PropTypes.node.isRequired,
  };
  console.log(metric, 'metric');

  // useEffect(() => {
  //   if (isLoading === 'true') {
  //     dispatch(fetchMetricsByThunk());
  //   }
  // }, [dispatch, isLoading, error]);

  // if (isLoading === 'pending') {
  //   return (<p>loading data...</p>);
  // }

  // if (error) return (<p>Oops! Seems something went wrong</p>);

  return (
    <div className="metric-container">
      <h2>This is metric details</h2>
      <ul className="metric-list">
        <li>metric 1</li>
        {/* <li>{metric.symbol}</li> */}
        {/* <li>{metric.name}</li>
        <li>{metric.price}</li>
        <li>{metric.changesPercentage}</li> */}
      </ul>
    </div>
  );
};

export default MetricsDetails;
