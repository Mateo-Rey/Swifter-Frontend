import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import DirectMessages from "./pages/DirectMessages";
import Explore from "./pages/Explore";
import Header from "./components/Header";

function App() {
  return (
    <>
    
      <div className="">
        
        <Router>
          <AuthProvider>
            

            <Routes>
              <Route path='/' element={<Navigate to='/dashboard'/>}/>
              <Route index path="/dashboard" element={<Dashboard />} />
              <Route
                path="/direct-messages"
                element={
                  <PrivateRoute>
                    <DirectMessages />
                  </PrivateRoute>
                }
              />
              <Route
                path="/explore"
                element={
                  <PrivateRoute>
                    <Explore />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
