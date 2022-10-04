import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #FFFFF2;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 20px;
  text-align: center;
  padding-top: 5rem;
  margin: 0 auto;
  @media screen and (max-width: 824px) {
    width: 90vw;
  }
`;

const MediaWrapper = styled.div`
  gap: 65px;
  img { width: 80px; }
  margin-top: 4.5rem;
  @media screen and (max-width: 824px) {
    gap: 30px;
  }
`;

const ContactWrapper = styled.div`
  gap: 65px;
  margin-top: 4.5rem;
  .p-mail::before, .p-phone::before {
    vertical-align: middle;
    margin-right: 12px;
    width: 16px;
    height: 16px;
  }
  .p-mail::before {
    content: url("https://i.imgur.com/Ky1eiIl.png");
  }
  .p-phone::before {
    content: url("https://i.imgur.com/zU4ISaG.png");
  }
  @media screen and (max-width: 824px) {
    flex-direction: column;
    gap: 5px;
  }
`;


const ModalContent = styled.div`
  color: #000;
  p{ line-height: 16px }
  h3 {
  }
  span{ color: #F7B43F; }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #000;
`;

export const ContactModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent className='flex-column-ct justify-center'>
                <h3>Drop me a <span>Hi</span>!</h3>
                <MediaWrapper className='flex-row-ct'>
                  <a href='https://www.facebook.com/noiciuciu/' target="_blank">
                    <img src={"https://i.imgur.com/JAI9GFF.png"}/>
                  </a>
                  <a href='https://www.instagram.com/augustruong/' target="_blank">
                    <img src={"https://i.imgur.com/aOG7HrW.png"}/>
                  </a>
                  <a href='https://github.com/augustruong' target="_blank">
                    <img src="https://i.imgur.com/eKfpnYE.png"/>
                  </a>
                </MediaWrapper>
                <ContactWrapper className='flex-row-ct'>
                  <p className='p-mail'>thu.phd.truong@gmail.com</p>
                  <p className='p-phone'>(+81)70-3286-7659</p>
                </ContactWrapper>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};