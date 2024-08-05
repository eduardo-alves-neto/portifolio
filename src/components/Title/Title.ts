import styled from "styled-components";

interface TitleProps {
  mY?: string;
  color?: string;
  textAling?: string;
  fontWeight?: string;
}
const Title = styled.h2<TitleProps>`
  width: 100%;
  color: ${(props) => props.color};
  margin-top: ${(props) => props.mY};
  margin-bottom: ${(props) => props.mY};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAling};
`;

Title.defaultProps = {
  mY: "10px",
  fontWeight: "700",
  textAling: "start",
  color: "var(--color-grey-700)",
};

export default Title;
