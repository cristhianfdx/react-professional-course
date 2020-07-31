import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const App = ({ greeting, subtitle }) => {
  return (
    <Fragment>
      <h1>
        {greeting} - {subtitle}
      </h1>
    </Fragment>
  );
};

App.propTypes = {
  greeting: PropTypes.string.isRequired,
};

App.defaultProps = {
  subtitle: 'Test',
};

export default App;
