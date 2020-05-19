import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const StyledModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
`;

const StyledFormContainer = styled.form`
  background-color: black;
  height: 400px;
  width: 400px;
  margin: auto;
  text-align: center;
  padding-top: 50px;
  margin-top: 50px;
`;

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <StyledModalContainer>
      <StyledFormContainer>{children}</StyledFormContainer>
    </StyledModalContainer>,
    elRef.current
  );
};

export default Modal;
