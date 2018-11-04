import React from "react";
export const Herman = ({ className }) => (
  <div className={`d-flex align-items-center ${className}`}>
    MIT ©
    <a href="https://hermanya.github.io" className="ml-1">
      Herman Starikov
    </a>
    <img
      style={{ width: 32, height: 32 }}
      className="d-inline-block ml-2 rounded shadow-sm"
      alt="Herman Starikov"
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1589206/profile/profile-512.jpg"
    />
    <a href="https://twitter.com/hermanhasawish">
      <i className="fab fa-twitter ml-2" style={{ color: "rgb(75,	160,	235	)" }} />
      <span className="sr-only">Link to Hermans twitter profile</span>
    </a>
    <a href="https://github.com/hermanya">
      <i className="fab fa-github ml-2" style={{ color: "black" }} />
      <span className="sr-only">Link to Hermans github profile</span>
    </a>
  </div>
);
