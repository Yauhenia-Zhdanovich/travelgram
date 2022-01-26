import * as React from 'react';

import styled from 'styled-components';

import { hostPath } from '../../constants';

import { Modal } from '../Modal';

const MainSection = styled.section`
  display: flex;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const ProfileImageContainer = styled.span`
  position: relative
  display: block;
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ProfileInfoSection = ({
  profilePhoto,
  profileDescription,
}: {
  profilePhoto: string;
  profileDescription: string;
}) => {
  const [isOpen, handleIsOpen] = React.useState(false);

  const onHandleClick = () => {
    handleIsOpen(!isOpen);
  };

  const profileImageUrl: string = `${hostPath}/${profilePhoto}`;

  return (
    <MainSection>
      <ProfileImageContainer onClick={onHandleClick}>
        <ProfileImage src={profileImageUrl} alt="" />
      </ProfileImageContainer>
      <div>
        <h3>{profileDescription}</h3>
      </div>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => {
            handleIsOpen(false);
          }}
        >
          <button
            onClick={() => {
              handleIsOpen(false);
            }}
          >
            Close
          </button>
        </Modal>
      )}
    </MainSection>
  );
};
