import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { AuthProvider } from "./components/useAuth";
import { useState } from "react";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";

function App() {
  const handleLogin = () => setIsAuthenticated(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
