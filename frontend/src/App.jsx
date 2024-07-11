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
import TextStoryLeftSide from "./components/story/textStory/TextStoryLeftSide.jsx";
import TextStoryPreview from "./components/story/textStory/TextStoryPreview.jsx";
import CreateStory from "./pages/CreateStory.jsx";
import ImageStoryLeftSide from "./components/story/imageStory/ImageStoryLeftSide.jsx";
import ImageStoryPreview from "./components/story/imageStory/ImageStoryPreview.jsx";

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
              <Route path="/registration" element={<Registration />} />
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
                <CreateStory
                  LeftSide={TextStoryLeftSide}
                  Preview={TextStoryPreview}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/photo-story"
            element={
              <PrivateRoute>
                <NavbarLarge />
                <NavbarSmall />
                <CreateStory
                  LeftSide={ImageStoryLeftSide}
                  Preview={ImageStoryPreview}
                />
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
