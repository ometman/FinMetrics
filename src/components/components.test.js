import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import DetailsData from './DetailsData';
import MetricDetails from './MetricDetails';

describe('General data and details data components render properly', () => {
  it('general data component have details data objects', async () => {
    const allmetrics = [
      { id: 11, name: 'Benin' },
      { id: 15, countryid: 'BEN' },
    ];
    const generalDataComponent = jest.mock('./GeneralData', () => {
      jest.mock('./DetailsData');
      return (
        <div className="allmetrics">
          {allmetrics.length > 0 ? (
            <div className="data-container">
              {allmetrics.map((metric) => <DetailsData key={metric.id} metric={metric} />)}
            </div>
          ) : (
            <p className="no-metrics">
              <i>Currently, No Country Metrics</i>
            </p>
          )}
        </div>
      );
    });
    expect(generalDataComponent).toMatchSnapshot();
    expect(allmetrics.length).not.toBeNull();
    expect(allmetrics[0].id).toBe(11);
    expect(allmetrics[0].name).toBe('Benin');
  });

  it('Details Data, component renders properly', () => {
    const metricObj = jest.mock('./DetailsData', () => {
      renderer
        .create(<DetailsData metric />)
        .toJSON();
    });
    expect(metricObj).toMatchSnapshot();
  });

  it('metrics details component renders properly', () => {
    const detailsComponent = jest.mock('./MetricDetails', () => {
      renderer
        .create(<MetricDetails page="/details" />)
        .toJSON();
    });
    expect(detailsComponent).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
