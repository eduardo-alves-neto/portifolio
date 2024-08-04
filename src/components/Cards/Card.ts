import styled from "styled-components";

interface CardProps {
  w?: string;
  h?: string;
  m?: string;
  p?: string;
  gap?: string;
}

interface CardTitleProps {
  color?: string;
}
interface CardDescriptionProps {
  color?: string;
}

const Card = styled.div<CardProps>`
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.gap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  border: 1px solid var(--color-grey-400);
  background-color: var(--color-grey-100);
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    position: relative;
    filter: brightness(0.3);
    transition: 0.2s;
    &:hover {
      filter: brightness(0.5);
    }
  }
  @media (max-width: 1180px) {
    img {
      filter: brightness(0.5) !important;
    }
  }
`;

export const CardTitle = styled.h1<CardTitleProps>`
  color: ${(props) => (props.color ? `${props.color}` : " #FFFF")};
`;

export const CardDescription = styled.p<CardDescriptionProps>`
  color: ${(props) => (props.color ? `${props.color}` : " #FFFF")};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
`;

export const CardFooter = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: right;
`;

Card.defaultProps = {
  p: "0px",
  m: "10px",
  h: "300px",
  w: "500px",
  gap: "10px",
};

export default Card;
