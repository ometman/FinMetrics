import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightShort } from 'react-icons/bs';
// import { useDispatch } from 'react-redux';
// import { extraReducers } from '../redux/metricsdetails/metricsDetailsSlice';
import beaconfunds from '../assets/beaconfunds.png';

const DetailsData = ({ metric }) => {
  const {
    symbol,
    name,
    price,
    changesPercentage,
  } = metric;

  DetailsData.propTypes = {
    metric: PropTypes.node.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changesPercentage: PropTypes.node.isRequired,
  };

  // const dispatch = useDispatch();

  // const handleClick = () => {
  //   useEffect(() => {
  //     if (isLoading === 'true') {
  //       dispatch(fetchMetricsByThunk());
  //     }
  //   }, [dispatch, isLoading, error]);

  //   if (isLoading === 'pending') {
  //     return (<p>loading data...</p>);
  //   }

  //   if (error) return (<p>Oops! Seems something went wrong</p>);
  // };

  return (
    <div className="metric-container">
      <div name="metric-left">
        <div className="metric-top">
          <div className="metric-image-container">
            <img src={beaconfunds} className="metric-image" alt="Company" />
          </div>
          <div className="metric-details-icon btn-link">
            <BsArrowRightShort className="metric-image" />
          </div>
        </div>
        <ul className="metric-bottom company-info">
          <li><h4>{name}</h4></li>
          <li>
            <p>
              Symbol:
              {' '}
              {symbol}
            </p>
          </li>
          <li>
            Price:
            {' '}
            {price}
          </li>
          <li>
            Percentage Changes:
            {' '}
            {changesPercentage}
          </li>
        </ul>
      </div>
      <div name="metric-right">
        <div className="metric-top">
          <div className="metric-image-container">
            <img src={beaconfunds} className="metric-image" alt="Company" />
          </div>
          <div className="metric-details-icon btn-link">
            <BsArrowRightShort className="metric-image" />
          </div>
        </div>
        <ul className="metric-bottom company-info">
          <li><h4>{name}</h4></li>
          <li>
            <p>
              Symbol:
              {' '}
              {symbol}
            </p>
          </li>
          <li>
            Price:
            {' '}
            {price}
          </li>
          <li>
            Percentage Changes:
            {' '}
            {changesPercentage}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsData;
