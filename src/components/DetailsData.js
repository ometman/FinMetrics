import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import MetricsDetails from './MetricDetails';
import {
  fetchMetricsByThunk,
} from '../redux/metricsdetails/metricsDetailsSlice';

const DetailsData = ({ metric }) => {
  const { allmetrics } = useSelector((store) => store.metrics);
  const [metricData, setMetricData] = useState({});
  const [metricId, setMetricId] = useState('');

  const dispatch = useDispatch();
  // const {
  //   id, total, flagImage, adminregion, capitalCity,
  //   countryid, incomeLevel, iso2Code,
  //   latitude, lendingType, longitude,
  //   name, region,
  // } = metric;

  const {
    id,
    // total,
    flagImage,
    capitalCity,
    name,
  } = metric;

  DetailsData.propTypes = {
    id: PropTypes.string.isRequired,
    // total: PropTypes.string.isRequired,
    flagImage: PropTypes.node.isRequired,
    // adminregion: PropTypes.object.isRequired,
    capitalCity: PropTypes.string.isRequired,
    // countryid: PropTypes.string.isRequired,
    // incomeLevel: PropTypes.object.isRequired,
    // iso2Code: PropTypes.string.isRequired,
    // latitude: PropTypes.string.isRequired,
    // lendingType: PropTypes.object.isRequired,
    // longitude: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // region: PropTypes.object.isRequired,
    metric: PropTypes.node.isRequired,
  };

  // DetailsData.propTypes = {
  //   id: PropTypes.string.isRequired,
  //   total: PropTypes.string.isRequired,
  //   flagImage: PropTypes.node.isRequired,
  //   adminregion: PropTypes.object.isRequired,
  //   capitalCity: PropTypes.string.isRequired,
  //   countryid: PropTypes.string.isRequired,
  //   incomeLevel: PropTypes.object.isRequired,
  //   iso2Code: PropTypes.string.isRequired,
  //   latitude: PropTypes.string.isRequired,
  //   lendingType: PropTypes.object.isRequired,
  //   longitude: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   region: PropTypes.object.isRequired,
  //   metric: PropTypes.node.isRequired,
  // };

  const handleClick = async (e) => {
    const dataId = e.target.id;
    setMetricId(dataId);
    dispatch(fetchMetricsByThunk());
    const metricSelect = await allmetrics.filter(
      (metricEntry) => metricEntry.id === dataId,
    );
    setMetricData(metricSelect);
    return (setMetricId && setMetricData)
      ? (<MetricsDetails key={metricId} metric={metricData} />)
      : (
        <div><p>No metrics</p></div>
      );
  };

  return (
    <div className="details-data-container">
      <div className="metric-top">
        <div className="metric-image-container">
          <img src={flagImage} className="metric-image" alt="Company" />
        </div>
        <div className="metric-details-icon-container btn-link">
          <NavLink to="/details">
            <i className="metrics-link-icon">
              <FiArrowRightCircle id={id} onClick={handleClick} />
            </i>
          </NavLink>
        </div>
      </div>
      <ul className="metric-bottom company-info">
        <li><h4>{name}</h4></li>
        <li>
          <p>
            {capitalCity}
          </p>
        </li>
        {/* <li>
            {changesPercentage}
          </li> */}
      </ul>
    </div>
  );
};

export default DetailsData;
