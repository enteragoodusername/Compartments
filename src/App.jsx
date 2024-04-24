import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Compartments from './Compartments';
import LandingPage from './landing/LandingPage';


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
          <Route path="/Homepage" element={<Compartments />} />
          
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;