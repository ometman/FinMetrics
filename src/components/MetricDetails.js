import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MetricsDetails = () => {
  const { allmetrics, stateValue } = useSelector((store) => store.metrics);
  const [mid, setMid] = useState(0);

  useEffect(() => {
    const themid = Number(stateValue);
    setMid(themid);
  }, [setMid, allmetrics, stateValue]);

  return (
    <div className="allmetrics">
      <ul className="metric-head-container">
        <li className="metric-head-image">
          <img
            src={(allmetrics[15 + mid].flagImage)}
            className="metric-head-image"
            alt="Benin Metrics"
          />
        </li>
        <li className="metric-head-info">
          <h3>Economic Indicators for</h3>
          {' '}
          <h3>
            {allmetrics[15 + mid].name}
            {}
          </h3>
          {' '}
          <h4>
            {allmetrics[15 + mid].capitalCity}
          </h4>
        </li>
      </ul>
      <div className="metrics-container">
        <div className="metrics-details-container">
          <ul className="metrics-details-list">
            <li>
              country id:
              {' '}
              {allmetrics[15 + mid].countryid}
            </li>
            <li>
              capitalCity:
              {' '}
              {allmetrics[15 + mid].capitalCity}
            </li>
            <li>
              adminregion value:
              {' '}
              {allmetrics[15 + mid].adminregion.value}
            </li>
            <li>
              adminregion id:
              {' '}
              {allmetrics[15 + mid].adminregion.id}
            </li>
            <li>
              adminregion code:
              {' '}
              {allmetrics[15 + mid].adminregion.iso2code}
            </li>
            <li>
              incomeLevel:
              {' '}
              {allmetrics[15 + mid].incomeLevel.value}
              {' '}
              (
              {allmetrics[15 + mid].incomeLevel.id}
              )
            </li>
            <li>
              lendingType:
              {' '}
              {allmetrics[15 + mid].lendingType.value}
            </li>
            <li>
              latitude:
              {' '}
              {allmetrics[15 + mid].latitude}
            </li>
            <li>
              longitude:
              {' '}
              {allmetrics[15 + mid].longitude}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MetricsDetails;
