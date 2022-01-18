import * as React from 'react';

import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  height: 200px;
  width: 200px;
  background-color: #fff;
`;

export const Modal = () => {
  return (
    <ModalContainer>
      <ModalBody>Modal window</ModalBody>
    </ModalContainer>
  );
};
