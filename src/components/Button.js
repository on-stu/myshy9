import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  padding: 10px;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  width: 100%;
  ${(props) =>
    props.thisClicked && !props.isAnswer && "background-color: #e74c3c;"}
  ${(props) =>
    props.isClicked && props.isAnswer && "background-color: #3498db;"}
`;

const Button = ({
  text,
  isAnswer,
  isClicked,
  setIsClicked,
  setMyAnswer,
  thisIndex,
}) => {
  const [thisClicked, setThisClicked] = useState(false);
  useEffect(() => {
    setThisClicked(false);
  }, [text]);
  return (
    <Container
      onClick={() => {
        if (!isClicked) {
          setIsClicked(true);
          setThisClicked(true);
          setMyAnswer(thisIndex);
        }
      }}
      isClicked={isClicked}
      isAnswer={isAnswer}
      thisClicked={thisClicked}
    >
      {text}
    </Container>
  );
};

export default Button;
