import * as React from 'react';

import styled from 'styled-components';

import { PortalForModal } from '../PortalForModals';
import { Modal } from '../Modal';

const profileImage = require('../../assets/photo_11.jpg');

const MainSection = styled.section`
  display: flex;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const ProfileImageContainer = styled.span`
  display: block;
  border-radius: 50%;
  flex: 0 0 auto;
  position: relative
  width: 150px;
  height: 150px;
  cursor: pointer;
`;

export const ProfileInfoSection = () => {
  const [isOpen, handleIsOpen] = React.useState(false);

  const onHandleClick = () => {
    handleIsOpen(!isOpen);
  };

  return (
    <MainSection>
      <ProfileImageContainer onClick={onHandleClick}>
        <ProfileImage src={profileImage.default} alt="" />
      </ProfileImageContainer>
      <div>
        <h3>desription</h3>
      </div>
      {isOpen && (
        <PortalForModal>
          <Modal></Modal>
        </PortalForModal>
      )}
    </MainSection>
  );
};
