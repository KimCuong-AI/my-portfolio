import React from "react";
import { FaCalendarTimes, FaPhoneAlt, FaUser } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import Rotate from "react-reveal/Rotate";

export default function About() {
  return (
    <FormAbout className="container">
      <Rotate top left>
        <FormDetail>
          <h1 className="text-center font-weight-bold">About Me</h1>
          <div className="row">
            <div className="col-12 col-md-5 text-center">
              <img src="./img/businessman.png" alt="hinh dai dien" />
            </div>
            <div className="col-12 col-md-7">
              <div className="row item">
                <div className="col-4 item-content ">
                  <div className="item-title">
                    <FaUser className="icon-item" />
                    <span>Name</span>
                  </div>
                </div>
                <div className="col-8">: Trần Kim Cường</div>
              </div>
              <div className="row item">
                <div className="col-4 item-content ">
                  <div className="item-title">
                    <FaCalendarTimes className="icon-item" />
                    <span>Age</span>
                  </div>
                </div>
                <div className="col-8">: 25</div>
              </div>
              <div className="row item">
                <div className="col-4 item-content">
                  <div className="item-title ">
                    <AiOutlineGlobal className="icon-item" />
                    <span>Nationality</span>
                  </div>
                </div>
                <div className="col-8">: Viet Nam</div>
              </div>
              <div className="row item">
                <div className="col-4 item-content ">
                  <div className="item-title">
                    <IoLanguageSharp className="icon-item" />
                    <span>Language</span>
                  </div>
                </div>
                <div className="col-8">: Vietnamese, English</div>
              </div>
              <div className="row item">
                <div className="col-4 item-content ">
                  <div className="item-title">
                    <MdEmail className="icon-item" />
                    <span>Email</span>
                  </div>
                </div>
                <div className="col-8">: trankimcuongabcd@gmail.com</div>
              </div>
              <div className="row item">
                <div className="col-4 item-content ">
                  <div className="item-title">
                    <FaPhoneAlt className="icon-item" />
                    <span>Phone</span>
                  </div>
                </div>
                <div className="col-8">: 0967 935 842</div>
              </div>
            </div>
          </div>
        </FormDetail>
      </Rotate>
    </FormAbout>
  );
}
const FormAbout = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 1px 2px 5px 3px rgba(202, 197, 197, 0.571);
  background-color: #e6f4f1;
  h1 {
    color: #174447;
  }
`;
const FormDetail = styled.div`
  padding: 0px;
  padding-bottom: 15px;
  img {
    width: 250px;
    height: 380px;
    @media screen and (max-width: 575px) {
      width: 220px;
      height: 300px;
    }
  }
  .item {
    padding-top: 30px;
    position: relative;
    > div{
      padding-right:0px;
    }
    .item-content {
      padding-right: 0px;
    }
    .item-title {
      padding-left: 10px;
      color: white !important;
      background: #59797b;
      border-radius: 2px;
      margin: auto;
      .icon-item {
        position: absolute;
        padding: 2px;
        top: 50%;
        transform: translateY(-50%);
        @media screen and (max-width: 991px) {
          font-size: 20px;
        }
      }
        span {
          margin-left: 25px;
          @media screen and (max-width: 991px) {
            font-size: 17px;
          }
        }
    }
    div {
      color: #174447;
      @media screen and (max-width: 991px) {
        font-size: 17px;
      }
    }
  }
`;
