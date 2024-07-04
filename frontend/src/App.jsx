import React, { Fragment } from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/*" element={<Login />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
