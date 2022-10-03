import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import DirectMessages from "./pages/DirectMessages"
import Explore from "./pages/Explore"

function App() {

  return (
    <>
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="*" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard"  element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }/>
            <Route path="/direct-messages" element={
            <PrivateRoute>
              <DirectMessages/>
            </PrivateRoute>
            }/>
            <Route path="/explore" element={
            <PrivateRoute>
              <Explore/>
            </PrivateRoute>
          }/>
          </Routes>
        </AuthProvider>
      </Router>
      </div>
    </>
  );
}

export default App;
