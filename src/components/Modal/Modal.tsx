import * as React from 'react';

import styled from 'styled-components';

import { PortalForModal } from '../PortalForModals';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  border-radius: 12px;
  background-color: #fff;
`;

export const Modal = (props: {
  open: boolean;
  onClose: (isOpen: boolean) => void;
  children: JSX.Element | JSX.Element[];
}) => {
  const [active, setActive]: [boolean, any] = React.useState(false);

  return (
    <>
      {(props.open || active) && (
        <PortalForModal>
          <ModalContainer>
            <ModalBody>
              Modal window
              <div>{props.children}</div>
            </ModalBody>
          </ModalContainer>
        </PortalForModal>
      )}
    </>
  );
};
