import styled from "styled-components";

interface GridProps {
  gap?: number;
  width?: string;
  height?: string;
  gridTemplateColumns?: string;
  b?: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${(props) => props.gap}px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.b};
  padding: 5px;
  margin: 0 auto;
  grid-template-columns: ${(props) =>
    props.gridTemplateColumns ?? "1fr 1fr 1fr"};
`;

Grid.defaultProps = {
  gap: 1,
  width: "100%",
  height: "100px",
};

export default Grid;
