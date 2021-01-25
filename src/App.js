import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const App = ({ title }) => (
  <div className={title}>
    <h1>{title}</h1>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
