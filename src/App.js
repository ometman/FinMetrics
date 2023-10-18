import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import NavLink from './routes/NavLink';
import Home from './routes/Home';
// import Profile from './routes/Profile';
import DetailsPage from './routes/DetailsPage';
import ErrorPage from './routes/ErrorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLink />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<DetailsPage />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
