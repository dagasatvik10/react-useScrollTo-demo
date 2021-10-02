import { FC } from 'react';
import styled from 'styled-components';

import { Photo } from '../API';
import useScrollTo from '../hooks/useScrollTo';
import { Image } from './Image';

interface Props {
  photos: Photo[];
}

export const ImageList: FC<Props> = ({ photos }) => {
  const [firstImageRef, scrollToFirstImage] = useScrollTo<HTMLImageElement>();
  const [lastImageRef, scrollToLastImage] = useScrollTo<HTMLImageElement>();

  return (
    <StyledContainer>
      <h1>Images</h1>
      <StyledImageList>
        {photos?.map((photo, index) => {
          if (index === 0) {
            return <Image photo={photo} key={photo.id} imgRef={firstImageRef} />;
          } else if (index === photos.length - 1) {
            return <Image photo={photo} key={photo.id} imgRef={lastImageRef} />;
          }

          return <Image photo={photo} key={photo.id} />;
        })}
      </StyledImageList>

      <StyledPageUpDownWrapper>
        <img
          alt=""
          src="https://img.icons8.com/ios-filled/50/000000/page-up-button.png"
          onClick={() => scrollToFirstImage(true)}
        />
        <img
          alt=""
          src="https://img.icons8.com/ios-filled/50/000000/page-down-button.png"
          onClick={() => scrollToLastImage(true)}
        />
      </StyledPageUpDownWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    cursor: pointer;
  }
`;

const StyledPageUpDownWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px;
  cursor: pointer;
  & img {
    padding: 5px;
  }
`;
