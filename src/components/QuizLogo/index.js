/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';

import React from 'react';

function Logo() {
  return (
    <img width="100" src="https://i.postimg.cc/kGYjSG5J/Seek-Png-com-soccer-ball-png-3089945.png" />
  );
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: 0.8;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
