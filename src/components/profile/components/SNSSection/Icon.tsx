import { motion } from 'framer-motion';
import styled from 'styled-components';

const Icon = ({ src, link }: { src: string; link: string }) => {
  return (
    <IconBack whileHover={{ y: -5 }}>
      <a href={link.includes('010-') ? `tel:${link}` : link}>
        <IconImg src={src}></IconImg>
      </a>
    </IconBack>
  );
};

export default Icon;
const IconBack = styled(motion.div)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const IconImg = styled.img`
  width: 40px;
  height: 40px;
`;
