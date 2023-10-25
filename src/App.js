import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Header from './routes/Header';
import Home from './routes/Home';
import Metrics from './routes/Metrics';
import ErrorPage from './routes/ErrorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Metrics />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
