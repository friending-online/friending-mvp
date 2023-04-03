import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Introduce = () => {
  return (
    <>
      <Feature
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FeatureIcon src="solider.png" alt="img" />
        전라좌도 수군절도사
      </Feature>
      <Feature
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FeatureIcon src="birth.png" width="33px" height="33px" alt="img" />
        1545년생
      </Feature>
      <Feature
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FeatureIcon src="writer.png" width="33px" height="33px" alt="img" />
        난중일기 저자
      </Feature>
    </>
  );
};

export default Introduce;
const Feature = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
  color: white;
  font-size: 20px;
  background: #ff8a80;
  border-radius: 50px;
  height: 44px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
`;
const FeatureIcon = styled.img`
  position: absolute;
  left: 10px;
  width: 33px;
  height: 33px;
`;