import React from 'react';
import styled from 'styled-components';

const X = '70deg';
const color = 'teal';
const speed = '1s';

const StyledLoader = styled.figure`
  width: 150px;
  height: 150px;
  transform: translate(-50%, -65%);
  margin: 0;
  position: fixed;
  left: 50%;
  top: 50%;
  .loader__element {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .loader__element:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-top: 25px solid ${color};
    border-right: 5px solid ${color};
    border-bottom: 10px solid transparent;
    border-left: 0 solid transparent;
    border-radius: 50%;
  }

  .loader__element-1:after {
    animation: ring ${speed} linear infinite;
    transform: rotateX(${X}) rotateY(0deg) rotate(0deg);
  }
  .loader__element-2:after {
    animation: ring2 ${speed} linear infinite;
    animation-delay: (${speed} / -2);
    transform: rotateX(${X}) rotateY(60deg) rotate(0deg);
  }
  .loader__element-3:after {
    animation: ring3 ${speed} linear infinite;
    animation-delay: (${speed} / -3);
    transform: rotateX(${X}) rotateY(-60deg) rotate(0deg);
  }

  @keyframes ring {
    100% {
      transform: rotateX(${X}) rotateY(0deg) rotate(360deg);
    }
  }
  @keyframes ring2 {
    100% {
      transform: rotateX(${X}) rotateY(60deg) rotate(360deg);
    }
  }
  @keyframes ring3 {
    100% {
      transform: rotateX(${X}) rotateY(-60deg) rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <StyledLoader data-testid="loader">
      <div className="loader__element loader__element-1" />
      <div className="loader__element loader__element-2" />
      <div className="loader__element loader__element-3" />
    </StyledLoader>
  );
};
