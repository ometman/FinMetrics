import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { extraReducers } from '../redux/datadetails/dataDetailsSlice';

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
    changesPercentage: PropTypes.percent.isRequired,
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    useEffect(() => {
      if (isLoading === 'true') {
        dispatch(fetchMetricsByThunk());
      }
    }, [dispatch, isLoading, error]);
  
    if (isLoading === 'pending') {
      return (<p>loading data...</p>);
    }
  
    if (error) return (<p>Oops! Seems something went wrong</p>);
  };

  return (
    <div className="rocket-card">
      <div className="rocket-image-container">
        <img className="rocket-image" alt="A rocket" />
      </div>
      <ul className="rocket-details">
        <li><h2>rocketname</h2></li>
        <li>
          <p>
            conditions hold
          </p>
        </li>
        <li className="btn-link">
          conditions buttons
        </li>
      </ul>
    </div>
  );
};

export default DetailsData;
