import styled from "styled-components";

interface GridProps {
  gap?: number;
  xs?: number;
  md?: number;
  lg?: number;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

const Grid = styled.div<GridProps>`
  display: grid;
  border: 1px solid red;
  padding: 5px;
  width: 100%;
  height: max-content;
  margin: 0 auto;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.gap || 1}rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(12, 1fr);
    & > * {
      grid-column: span ${(props) => props.xs || 12};
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(12, 1fr);
    & > * {
      grid-column: span ${(props) => props.md || props.xs || 12};
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    & > * {
      grid-column: span ${(props) => props.lg || props.md || props.xs || 12};
    }
  }
`;

Grid.defaultProps = {
  gap: 1,
  xs: 12,
  md: 6,
  lg: 4,
};

export default Grid;
