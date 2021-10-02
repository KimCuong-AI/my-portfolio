import React from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import ResumeItem from "./ResumeItem";
import Zoom from "react-reveal/Zoom";

function Resume() {
  return (
    <Wrapper>
      <Zoom>
        <ResumeStyled className="container">
          <h1
            className="text-center pt-4 font-weight-bold"
            style={{ color: "#174447" }}
          >
            My Resume
          </h1>
          <div> 
            <div className="small-title">
              <FaBriefcase className="icon" />
              <span className='text'> Working Experience</span>
            </div>

            <div className="resume-content">
              <ResumeItem
                year={"2015 - 2020"}
                title={"Computer Science Teacher"}
                subTitle={"Sussex University"}
                text={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
                }
              />
              <ResumeItem
                year={"2015 - Present"}
                title={"Full Stack Developer"}
                subTitle={"Microsoft Studios"}
                text={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
                }
              />
              <ResumeItem
                year={"2010 - 2017"}
                title={"User Interface Designer"}
                subTitle={"Google Inc"}
                text={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
                }
              />
            </div>
            <div className="small-title">
              <IoSchoolSharp className="icon" />
              <span className='text' >Educational Qualifications</span>
            </div>
            <div className="resume-content ">
              <ResumeItem
                year={"201 - 2022"}
                title={"Computer Science Degree"}
                subTitle={"Sussex University"}
                text={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
                }
              />
              <ResumeItem
                year={"2015 - 2017"}
                title={"A - Levels"}
                subTitle={"Church Hill High"}
                text={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
                }
              />
              <ResumeItem
                year={"2015 - 2017"}
                title={"High School Graduation"}
                subTitle={"ABC School"}
                text={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
                }
              />
            </div>
          </div>
        </ResumeStyled>
      </Zoom>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #e6f4f1;
`;
const ResumeStyled = styled.section`
  padding-bottom: 1rem;
  .small-title {
    margin-top: 2rem;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    .icon {
      font-size: 40px;
      @media (max-width:480px){
          font-size:30px
      }
    }
    .text{
        padding-left: 10px;
        font-size:32px;
        @media (max-width:480px){
          font-size:26px
      }
    } 

  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid red;
  }
`;
export default Resume;
