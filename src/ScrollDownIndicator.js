import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  cursor: pointer;
`;
const animate = keyframes`
  from {
    opacity:0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  to {
    opacity:1;
    transform: rotate(45deg) translate(20px, 20px);
  }
`;
const Down = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
  margin: -20px;
  animation: ${animate} 1.5s infinite;
  :nth-child(2) {
    animation-delay: 0.2s;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  :nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const ScrollDownIndicator = () => {
  return (
    <Container>
      <Down></Down>
      <Down></Down>
      <Down></Down>
    </Container>
  );
};

export default ScrollDownIndicator;
