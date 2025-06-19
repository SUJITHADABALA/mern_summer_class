import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import AppLayout from "./Layout/AppLayout";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (updatedUserDetails) => {
    setUserDetails(updatedUserDetails); // ✅ Correct
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          userDetails ? (
            <Navigate to="/dashboard" />
          ) : (
            <AppLayout>
              <Home />
            </AppLayout>
          )
        }
      />
      <Route
        path="/login"
        element={
          userDetails ? (
            <Navigate to="/dashboard" />
          ) : (
            <AppLayout>
              <Login updateUserDetails={updateUserDetails} />
            </AppLayout>
          )
        }
      />
      <Route
        path="/dashboard"
        element={userDetails ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
