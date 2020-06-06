import React, { useRef } from 'react';
import styled from 'styled-components';

import Portal from '@material-ui/core/Portal';

const StyledModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledFormContainer = styled.form`
  background-color: white;
  height: auto;
  width: 400px;
  margin: auto;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalMui = ({ children }) => {
  const container = useRef(null);

  return (
    <Portal container={container.current}>
      <StyledModalContainer>
        <StyledFormContainer>{children}</StyledFormContainer>
      </StyledModalContainer>
    </Portal>
  );
};

export default ModalMui;
