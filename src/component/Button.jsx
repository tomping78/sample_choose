import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const ColorStyle = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `};
    `;
  }}
`;

const FullWidth = css`
  ${({ widthfull }) =>
    widthfull &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 0.5rme;
      }
    `}
`;

const SizeStyle = css`
  ${({ size }) =>
    size === "large" &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}
  ${({ size }) =>
    size === "medium" &&
    css`
      height: 2.2rem;
      font-size: 1rem;
    `}
  ${({ size }) =>
    size === "small" &&
    css`
      height: 1.8rem;
      font-size: 0.7rem;
    `}
`;

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;

  height: 2rem;
  font-size: 1rem;

  ${ColorStyle}
  ${SizeStyle}
  ${FullWidth}

  & + & {
    margin-left: 0.5rem;
  }
`;

function Button({ children, size, ...rest }) {
  return (
    <>
      <StyledButton size={size} {...rest}>
        {children}
      </StyledButton>
    </>
  );
}
Button.defaultProps = {
  color: "blue",
};

export default Button;
