import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { init } from "ityped";
import {
  AiFillCodeSandboxCircle,
  AiFillGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaFacebook, FaSkype } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

export default function Introdution() {
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Tran Kim Cuong", " a Frontend Developer "],
    });
  }, []);
  const textRef = useRef();
  return (
    <Intro >
      <Body className="row w-100">
        <div className="col-12 col-md-6 intro-left">
          <Fade top>
          <div>
            <h1 className='mt-5 mt-md-0'>Welcome!</h1>
            <h1 className="ityped">
              I'm <span ref={textRef}></span>
            </h1>
            <p className='text-introduce'>
              I'm passionate about learning new technologies and always keep
              concentrated on improving my self skills. Being patient and
              responsible for working help me implement completely assigned
              tasks.
            </p>
            <div className="download">
              <a href="/img/Ebook.pdf" className="upDown" download>
                <AiOutlineDownload /> DOWNLOAD CV
              </a>
            </div>

            <div className="mt-5">
              <div className="row icon-content">
                <div className="col-3">
                  <a href='https://www.facebook.com/kimcuongtran1234' target='_blank'>
                    <FaFacebook className="icon facebook" />
                  </a>
                </div>
                <div className="col-3">
                  <a href='https://github.com/KimCuong-AI' target='_blank'>
                    <AiFillGithub className="icon github" />
                  </a>
                </div>
                <div className="col-3">
                  <a href='https://codesandbox.io/u/trankimcuongabcd' target='_blank'>
                    <AiFillCodeSandboxCircle className="icon codesand" />
                  </a>
                </div>
                <div className="col-3">
                  <a href='skype:trankimcuongabcd@gmail.com' target='_blank'>
                    <FaSkype className="icon skype" />
                  </a>
                </div>
              </div>
            </div>
          </div>
      
          </Fade>
   
        </div>
        <div className="col-12 col-md-6 mt-4 mb-4 ">
        <Fade right>
          <div className="intro-right">
            <ImgPortrait src="./img/portrait.png" />
          </div>
          </Fade>
        </div>
      </Body>
    </Intro>
  );
}
const Intro = styled.div`
  min-height: 800px;
  background-color: #e6f4f1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left:80px;
  padding-right:80px; 
  @media (max-width:991px){
    padding-left:10px;
    padding-right:10px;
  }
`;
const Body = styled.div`
  .intro-left {
    display: flex;
    align-items: center;
    .ityped {
      margin-top: 20px;
      font-size: 40px;
      span {
        font-size: inherit;
        color: #ff1744;
      }
      .ityped-cursor {
        animation: blink 1s infinite;
      }

      @keyframes blink {
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
    .text-introduce{
      margin-top: 30px;
      margin-bottom:50px; 
      text-align:justify;
    }
    .download {
      width: 200px;
      background-color: #ff1744;
      border-radius: 15px;
      padding: 5px 10px;
      animation: upDown 3s linear 0s infinite;
      @keyframes upDown {
        0% {
        }
        25% {
          transform: translateY(-5px);
        }
        50% {
          transform: translateY(0);
        }
        75% {
          transform: translateY(5px);
        }
        100% {
          transform: translateY(0);
        }
      }
      a {
        color: white;
      }
    }
    .icon-content {
      max-width: 400px;
      .icon {
        font-size: 40px;
        color:#0d2b4ee6;
        transition:all 0.2s ease-in-out
      }
      .facebook:hover{
        transform:scale(1.1) ;
        color:#4267b2;
      }
      .github:hover{
        transform:scale(1.1) ;
        color:black;
      }
      .codesand:hover{
        transform:scale(1.1) ;
        color:black;
      }
      .skype:hover{
        transform:scale(1.1) ;
        color: #0292d2;
      }
    }
  }
  .intro-right {
    overflow: hidden;
    text-align: center;
    background-color: #507576;
    height: 500px;
    width: 500px;
    border-radius: 50%;
    margin: auto;
    @media screen and (max-width: 991px) {
      height: 350px;
      width: 350px;
    }
    @media screen and (max-width: 480px) {
      height: 300px;
      width: 300px;
    }
  }
`;
const ImgPortrait = styled.img`
  height: 100%;
`;
