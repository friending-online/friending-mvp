import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/modal/Modal';
import { AnimatePresence } from 'framer-motion';
import Footer from '../components/background/Footer';
import Profile from '../components/profile/Profile';
import Header from '../components/background/Header';
import { GyuData, GyuLinkObjectArray } from '../data/Gyumin';
function Gyumin() {
  const [modal, setModal] = useState(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setModal(true);
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleClick = () => {
    clearTimeout(timerRef.current);
    setModal(true);
  };

  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <AnimatePresence>
          {modal && <Modal setModal={() => setModal(false)} />}
        </AnimatePresence>
        <Profile userData={GyuData} linkObj={GyuLinkObjectArray} />
      </MainWrapper>
      <Footer handleClick={handleClick} fileName="screenshot2" />
    </Wrapper>
  );
}

export default Gyumin;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-style: solid;
  flex-direction: column;
  max-width: 360px;
  position: relative;
  height: calc(var(--vh, 1vh) * 100 + 100px);
  background-image: url('background.png');
`;
const MainWrapper = styled.div`
  position: relative;
  max-width: 360px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 600px;
  padding-bottom: 20px;
`;
