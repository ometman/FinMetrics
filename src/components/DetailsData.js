import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ArrowRight from '../assets/ArrowRight.png';
import { changeState } from '../redux/metricsdetails/metricsDetailsSlice';

const DetailsData = ({ metric }) => {
  const dispatch = useDispatch();
  const [metricId, setMetricId] = useState(true);

  const handleClick = (e) => {
    const dataId = e.target.id;
    if (metricId) {
      dispatch(changeState(dataId));
    }
    setMetricId(false);
  };

  const {
    id,
    flagImage,
    capitalCity,
    name,
  } = metric;

  DetailsData.propTypes = {
    id: PropTypes.string.isRequired,
    flagImage: PropTypes.node.isRequired,
    capitalCity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    metric: PropTypes.node.isRequired,
  };

  return (
    <div className="details-data-container">
      <div className="metric-top">
        <div className="metric-image-container">
          <img src={flagImage} className="metric-image" alt="Company" />
        </div>
        <div className="metric-details-icon-container btn-link">
          <NavLink to="/details">
            <button type="button" className="metrics-link-icon" onClick={handleClick}>
              <img id={id} className="thisbtn right-arrow-image" src={ArrowRight} alt="Right arrow" />
            </button>
          </NavLink>
        </div>
      </div>
      <ul className="metric-bottom country-info">
        <li><h4>{name}</h4></li>
        <li>
          <p>
            {capitalCity}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DetailsData;
