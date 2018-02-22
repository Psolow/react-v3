import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing">
    <h1>Svideo</h1>
    <input type="text" placeholder="search" />
    <Link to="/search">Or see all</Link>
  </div>
);

export default Landing;
