import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../assets/data.json";
import Button from "../components/Button";
import { BiCheckCircle } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: whitesmoke;
  font-size: 80px;
  .top {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    white-space: nowrap;
    position: relative;
  }
  .correct {
    position: absolute;
    top: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 32px;
    ${(props) => (props.iconColor ? "color: green;" : "color:red;")}
  }
  .answer {
    font-size: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    row-gap: 20px;
  }
`;

const ChangeButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 16px;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  width: 100%;
`;

const Solve = () => {
  const [currentItem, setCurrentItem] = useState({});
  const [index, setIndex] = useState(getRandomInt(0, 4562));
  const [answers, setAnswers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [myAnswer, setMyAnswer] = useState();

  useEffect(() => {
    setAnswers([]);
    setIsClicked(false);
    setCurrentItem(data[index]);
    setRandomAnswers();
    return () => setRandomAnswers();
  }, [index]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min)) + min;
    if (data[result].hangul) {
      return result; //최댓값은 제외, 최솟값은 포함
    } else {
      return getRandomInt(0, 4562);
    }
  }

  function setRandomAnswers() {
    const answerIndex = getRandomInt(0, 4);
    for (let i = 0; i < 4; i++) {
      if (i === answerIndex) {
        setAnswers((answers) => [...answers, index]);
      } else {
        const newIndex = getRandomInt(0, 4562);
        setAnswers((answers) => [...answers, newIndex]);
      }
    }
  }

  return (
    <Container iconColor={myAnswer === index}>
      <div className="top">
        <span className="correct">
          {isClicked && myAnswer === index ? (
            <BiCheckCircle />
          ) : (
            isClicked && <FaRegTimesCircle />
          )}
        </span>
        {currentItem.hanja}
      </div>
      <div className="answer">
        {isClicked && `${currentItem.hangul} : ${currentItem.description}`}
      </div>
      <div className="contents">
        {answers?.map((answer, i) => (
          <Button
            key={i}
            text={data[answer].hangul}
            isAnswer={answer === index ? true : false}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            setMyAnswer={setMyAnswer}
            thisIndex={answer}
          />
        ))}
        <ChangeButton onClick={() => setIndex(getRandomInt(0, 4562))}>
          한자 바꾸기
        </ChangeButton>
      </div>
    </Container>
  );
};

export default Solve;
