import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
    from {
        opacity:0
    }
    to {
        opacity:1
    }
`;
const fadeOut = keyframes`
    from {
        opacity:1
    }
    to {
        opacity:0
    }
`;
const slideUp = keyframes`
    from {
        transform:translateY(200px);
    }
    to {
        transform:translateY(0px);
    }
`;
const slideDown = keyframes`
    from {
        transform:translateY(0px);
    }
    to { 
        transform:translateY(200px);
    }
`;
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);

  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;
const DialogBlock = styled.div`
  width: 300px;
  padding: 1.5rem;
  background: white;
  border-radius: 2rem;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

function Dialog({
  title,
  children,
  cancelText,
  confirmText,
  onConfirm,
  onCancel,
  visible,
}) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;
  return (
    <>
      <DarkBackground disappear={!visible}>
        <DialogBlock disappear={!visible}>
          <h3>{title}</h3>
          <p>{children}</p>
          <Button color="gray" onClick={onConfirm}>
            {cancelText}
          </Button>
          <Button color="pink" onClick={onCancel}>
            {confirmText}
          </Button>
        </DialogBlock>
      </DarkBackground>
    </>
  );
}

Dialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default Dialog;
