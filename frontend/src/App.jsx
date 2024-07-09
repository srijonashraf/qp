import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NewsFeed from "./pages/NewsFeed";
import NavbarLarge from "./components/shared/navbar/NavbarLarge";
import NavbarSmall from "./components/shared/navbar/NavbarSmall";
import PrivateRoute from "./components/shared/private/PrivateRoute";
import { getAccessToken } from "./helper/sessionHelper";

const App = () => {
  const isLoggedIn = getAccessToken();

  return (
    <Fragment>
      <Router>
        <Routes>
          {!isLoggedIn && (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </>
          )}

          <Route
            path="/"
            element={
              <PrivateRoute>
                <NavbarLarge />
                <NavbarSmall />
                <NewsFeed />
              </PrivateRoute>
            }
          />
          <Route
            path="/newsfeed"
            element={
              <PrivateRoute>
                <NavbarLarge />
                <NavbarSmall />
                <NewsFeed />
              </PrivateRoute>
            }
          />

          <Route
            path="/*"
            element={
              <Fragment>
                <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
                  <p className="text-center fs-2">Page Not Found</p>
                  <button
                    className="btn btn-primary my-2"
                    onClick={() => (window.location.href = "/")}
                  >
                    Return to Home
                  </button>
                </div>
              </Fragment>
            }
          />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
