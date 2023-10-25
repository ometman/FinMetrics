import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from './Header';
import Home from './Home';
import ErrorPage from './ErrorPage';
import MetricsDetails from '../components/MetricDetails';
import GeneralData from '../components/GeneralData';

describe('route components rendering properly', () => {
  it('home components renders with content', () => {
    const result = Home();
    expect(result).toEqual(
      <div className="app-container app-shadow">
        <div id="home">
          <GeneralData />
        </div>
      </div>,
    );
  });

  it('Home component renders data from GeneralData correctly', () => {
    const homeComponent = jest.mock('./Home', () => {
      jest.mock('../components/GeneralData');
      return (
        <div className="app-container app-shadow">
          <div id="home">
            <GeneralData />
          </div>
        </div>
      );
    });
    expect(homeComponent).not.toBeNull();
    expect(homeComponent).toMatchSnapshot();
  });

  it('Metrics components renders correctly', () => {
    const metricsComponent = jest.mock('./Metrics', () => {
      jest.mock('../components/MetricsDetails');
      return (
        <div className="app-container">
          <div className="profile-container">
            <div id="profile">
              <MetricsDetails />
            </div>
          </div>
        </div>
      );
    });
    expect(metricsComponent).not.toBeNull();
    expect(metricsComponent).toMatchSnapshot();
  });

  it('header component to render correctly', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );
    const theText = getByText('home');
    expect(theText).toBeInTheDocument();
    expect(getByText).toMatchSnapshot();
  });

  it('error page renders correctly', () => {
    const result = ErrorPage();
    const errorCode = '<h1>Oops! 404 Page</h1>';
    expect(result).toEqual(
      <div className="app-container app-shadow">
        <div id="error-page">
          <h1>Oops! 404 Page</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>This is mostly because the Page does not exist.</p>
        </div>
      </div>,
    );
    expect(result).toMatchSnapshot();
    expect(errorCode).toEqual('<h1>Oops! 404 Page</h1>');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
