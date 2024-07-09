import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NewsFeed from "./pages/NewsFeed";
import NavbarLarge from "./components/shared/navbar/NavbarLarge";
import NavbarSmall from "./components/shared/navbar/NavbarSmall";
import PrivateRoute from "./components/shared/private/PrivateRoute";
import { getAccessToken } from "./helper/sessionHelper";
import SelectStory from "./pages/SelectStory.jsx";
import SelectStoryType from "./components/story/landing/SelectStoryType";
import LeftSideText from "./components/story/textStory/LeftSideText";
import PreviewText from "./components/story/textStory/PreviewText";
import CreateStory from "./pages/CreateStory.jsx";

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
            path="/create-story"
            element={
              <PrivateRoute>
                <NavbarLarge />
                <NavbarSmall />
                <SelectStory Preview={SelectStoryType} />
              </PrivateRoute>
            }
          />
          <Route
            path="/text-story"
            element={
              <PrivateRoute>
                <NavbarLarge />
                <NavbarSmall />
                <CreateStory LeftSide={LeftSideText} Preview={PreviewText} />
              </PrivateRoute>
            }
          />

          <Route
            path="/*"
            element={
              <Fragment>
                <div className="flex flex-col h-screen items-center justify-center">
                  <p className="text-center text-lg">Page Not Found</p>
                  <button
                    className="px-5 py-3 rounded-md text-white bg-brand-secondary my-2"
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
