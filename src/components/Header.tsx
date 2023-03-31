import React from 'react';
import styled from 'styled-components';

const Header = ({ setRotate }: { setRotate: () => void }) => {
  return (
    <Wrapper>
      <Title>Friending</Title>
      <FlipButton src="/flip.png" onClick={setRotate} />
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-left: 15px;
`;
const FlipButton = styled.img`
  cursor: pointer;
  width: 30px;
`;