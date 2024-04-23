import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import LandingPage from './LandingPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Use the "element" prop to specify the component to render for each route */}
          {/* The leading slash ("/") indicates an absolute path */}
          <Route path="" element={<LandingPage />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



