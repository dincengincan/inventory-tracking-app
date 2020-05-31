import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  color: red;
  font-size: 15px;
`;

const Notification = ({ notificationText }) => (
  <StyledText>{notificationText}</StyledText>
);

export default Notification;
