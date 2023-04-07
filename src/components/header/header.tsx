import React, { FC } from "react";
import PropTypes from "prop-types";

export const Header: FC<any> = ({ user, onLogin, onLogout }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Unit Converter</h1>
      </div>
      {user ? <div> Hello {user.given_name} </div> : ""}
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
