import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
// import Profile from './routes/Profile';
import ErrorPage from './routes/ErrorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
