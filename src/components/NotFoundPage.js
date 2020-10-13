import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    404 Page Not Found
    <p>
      <Link to="/">Go to home</Link>
    </p>
  </div>
);

export default NotFoundPage;
