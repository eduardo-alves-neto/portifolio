import styled from "styled-components";

interface ButtonIconProps {
  isNotHovered?: boolean;
}

const ButtonIcon = styled.button<ButtonIconProps>`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.isNotHovered ? "none" : "var(--color-grey-100)"};
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
