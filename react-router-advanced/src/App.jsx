import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
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
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="/posts/:postId" element={<BlogPost />} />
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
  );
}

export default App;
