import { FC } from 'react';
import styled from 'styled-components';

import { ImageList } from './ImageList';
import MOCK_PHOTOS from './mocks/photos';

const App: FC = () => {
  return (
    <StyledContainer>
      <ImageList photos={MOCK_PHOTOS} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default App;
