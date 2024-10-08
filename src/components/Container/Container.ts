import styled from "styled-components";

interface ContainerProps {
  bgColor?: string;
  mt?: string;
  mb?: string;
  bd?: string;
  h?: string;
  p?: string;
  jsContent?: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => props.jsContent};
  height: ${(props) => props.h};
  padding: ${(props) => props.p};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  background-color: ${(props) => `var(${props.bgColor})`};
  border: ${(props) => (props.bd ? `${props.bd}px solid red` : "none")};

  @media (max-width: 1044px) {
    padding: 12px;
    & > div {
      width: 100%;
    }
    & > div {
      h1 {
        font-size: 3rem;
      }
    }
    .img {
      display: none;
    }
  }
`;

Container.defaultProps = {
  bgColor: "#FFFFFF",
  mt: "10px",
  h: "auto",
  jsContent: "center",
};

export default Container;
