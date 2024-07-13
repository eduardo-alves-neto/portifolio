import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  variation?: "primary" | "danger" | "secondary";
  size?: "small" | "medium" | "large";
}

const sizes = {
  small: css`
    padding: 8px 12px;
    font-size: 14px;
  `,
  medium: css`
    padding: 10px 16px;
    font-size: 16px;
  `,
  large: css`
    padding: 12px 20px;
    font-size: 18px;
  `,
};

const variations = {
  primary: css`
    color: var(--color-blue-100);
    background-color: var(--color-blue-700);
    cursor: pointer;

    &:hover {
      color: var(--color-blue-50);
      background-color: var(--color-blue-800);
    }
  `,
  secondary: css`
    color: var(--color-grey-700);
    background-color: var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => sizes[props.size ?? "small"]}
  ${(props) => variations[props.variation ?? "primary"]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
