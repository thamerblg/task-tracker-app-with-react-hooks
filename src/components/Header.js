import React from "react";
import PropTypes from "prop-types";

function Header({ title, showForm, showFromAdd, showFilter, showFilterTask }) {
  return (
    <div className="top-header">
      <div className="header">
        <h1>{title}</h1>
        <button className="btn-v1" onClick={showForm}>
          {showFromAdd ? "Hide form" : "Show form add"}
        </button>
      </div>
      <div className="sous-header">
        <button className="btn-v2" onClick={showFilter}>
          {showFilterTask ? "Hide Filter" : "Show Filter"}
        </button>
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
