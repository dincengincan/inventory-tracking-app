import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${({ width }) => (width ? `${width}px` : '800px')};
  margin: 0 auto;
  background-color: #dcc7aa;
  box-shadow: 0px 0px 10px 1px #bbbbbb;
  border-radius: 5px;
  padding: 20px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;

const FormLayout = ({ children, width }) => (
  <Container width={width}>{children}</Container>
);

export default FormLayout;
