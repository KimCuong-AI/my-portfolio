import React from "react";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';

const Skill = () => {
  return (
    <MySkills className="container">
      <Zoom> 
      <h1 className="text-center my-4">My Skills</h1>
      <div className="row  skill">
        <div className="col-3 d-flex align-items-center font-weight-bold ">
          <div className="tech-name">HTML/CSS</div>
        </div>
        <div className="col-9 ">
          <div className="skill-content">
            <div>
              <span className="skill-items">
                <img src="./img/html5.svg" width={30} height={30} alt="html5" />
              </span>
              <span className="skill-items">
                <img src="./img/css-3.svg" width={30} height={30} alt="css-3" />
              </span>
              <span className="skill-items">Responsive</span>
              <span className="skill-items">
                <img
                  src="./img/bootstrap-4.svg"
                  width={30}
                  height={30}
                  alt="bootstrap-4"
                />
              </span>
              <span className="skill-items">
                <img
                  src="./img/sass-1.svg"
                  width={30}
                  height={30}
                  alt="sass-1"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row  skill">
        <div className="col-3 d-flex align-items-center font-weight-bold ">
          <div className="tech-name">Javascript</div>
        </div>
        <div className="col-9 ">
          <div className="skill-content">
            <div>
              <span className="skill-items">ES5/ES6</span>
              <span className="skill-items">Restfull Api</span>
              <span className="skill-items">Axios</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row  skill">
        <div className="col-3 d-flex align-items-center font-weight-bold ">
          <div className="tech-name">ReactJs</div>
        </div>
        <div className="col-9 ">
          <div className="skill-content">
            <div>
              <span className="skill-items">ReactJs Basic</span>
              <span className="skill-items">Router</span>
              <span className="skill-items">Redux</span>
              <span className="skill-items">Redux Thunk</span>
              <span className="skill-items">React Hooks</span>
              <span className="skill-items">
                <img
                  src="./img/styledcomponent.png"
                  width={30}
                  height={30}
                  alt="styledcomponent"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row  skill">
        <div className="col-3 d-flex align-items-center font-weight-bold ">
          <div className="tech-name">Git</div>
        </div>
        <div className="col-9 ">
          <div className="skill-content">
            <div>
              <span className="skill-items">Git Basic</span>
            </div>
          </div>
        </div>
      </div>
      </Zoom>
    </MySkills>
  );
};
const MySkills = styled.div`
  .skill {
    margin-bottom: 30px;
    background-color: #f5f9fe;
    border: 2px solid #6c757d;
    border-radius: 15px;
    /* padding-bottom: 10px;
    padding-top: 10px; */
    .tech-name {
      @media (max-width: 767px) {
        font-size: 17px;
      }
    }
    .skill-content {
      display: flex;
      align-items: center;
      @media (max-width: 419px) {
        text-align: center;
        justify-content: center;
      }
      .skill-items {
        display: inline-block;
        background-color: #fff;
        border: 2px solid #000;
        border-radius: 20px;
        margin-right: 10px;
        margin-left:10px;
        text-align: center;
        width: 105px;
        padding-top: 3px;
        padding-bottom: 3px;
        margin-bottom: 5px;
        margin-top: 5px;
        line-height: 28px;
        font-size: 17px;
        @media (max-width: 767px) {
          font-size: 16px;
        }
      }
      .styled-component {
        width: 140px;
      }
    }
  }
`;
export default Skill;
