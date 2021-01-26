import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img width="100" src="https://i.postimg.cc/kGYjSG5J/Seek-Png-com-soccer-ball-png-3089945.png" />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: 0.8;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;