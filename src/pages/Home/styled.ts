import styled, { keyframes } from "styled-components";

interface ContentProps {
  width?: string;
  height?: string;
}

export const Container = styled.div`
  display: flex;
  padding-top: 90px;
  padding-left: 90px;
  flex-wrap: wrap-reverse;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (max-width: 1044px) {
    padding-left: 10px;
    padding-top: 0px;
    & > div {
      width: 100% !important;
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

export const Content = styled.div<ContentProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: 300px;

  h1 {
    font-size: 6rem;
    font-weight: 700;
    span {
      color: var(--color-grey-400);
    }
  }
  .buttons-content {
    display: flex;
    justify-content: left;
    margin-top: 90px;
    gap: 10px;
  }
  .img {
    width: 90%;
    height: auto;

    img {
      /* border: 3px solid black; */
    }
  }
  .card-contact {
    border-left: 8px solid var(--color-yellow-700);
    border-radius: 8px;
    margin-top: 80px;
    padding: 10px;
    padding-left: 10px;
    p {
      font-size: 1.7rem;
      margin: 5px;
    }
    a {
      font-size: 1.7rem;
      border-bottom: 1px solid var(--color-grey-400);
      margin: 5px;
    }
  }
`;

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const AnimatedText = styled.h1`
  animation: ${fadeInOut} 3s normal infinite;
`;