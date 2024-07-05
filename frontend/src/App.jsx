import React, { Fragment } from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";
import NavbarLarge from "./components/shared/navbar/NavbarLarge";
import NavbarSmall from "./components/shared/navbar/NavbarSmall";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/*" element={<Login />} />
          <Route
            path="/newsfeed"
            element={
              <Fragment>
                <NavbarLarge />
                <NavbarSmall />
                <NewsFeed />
              </Fragment>
            }
          />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
