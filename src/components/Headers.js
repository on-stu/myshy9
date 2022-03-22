import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #537fa8;
  display: flex;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  position: fixed;
  font-size: 20px;
  font-weight: 700;
  color: whitesmoke;
  z-index: 10;
`;

const Headers = () => {
  return <Container>MyShy - 9급 한자</Container>;
};

export default Headers;
