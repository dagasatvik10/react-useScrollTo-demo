import { FC, RefObject } from 'react';
import styled from 'styled-components';

import { Photo } from '../API';

type Props = {
  photo: Photo;
  imgRef?: RefObject<HTMLImageElement>;
};

export const Image: FC<Props> = ({ photo, imgRef }) => {
  return <StyledImg ref={imgRef} src={photo.src.portrait} key={photo.id} />;
};

const StyledImg = styled.img`
  width: 40%;
`;
