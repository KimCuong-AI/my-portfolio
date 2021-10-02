import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h5>{subTitle}</h5>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 2rem;
  }
  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid red;
      background-color: red;
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 4rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: red;
    }
    h5 {
      color: red;
      font-size:1.2rem;
      margin-bottom:1rem;
    }
  
    @media screen and (max-width: 480px) {
     p {
      font-size: 85%;
    }
  }
  }
`;
export default ResumeItem;
