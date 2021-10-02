import React from "react";
import styled from "styled-components";
import { ImLocation2 } from "react-icons/im";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
  return (
    <GetInTouch>
      <div className="container">
        <div className="mb-4">
          <Zoom>
            <div>
              <h1 className="heading">Get in Touch with me</h1>
            </div>
            <div className="contact-text">
              Thank you to spend your time visiting my page! Please feel free to
              send me some messages, hope that we can have a chance to work
              together.
            </div>
          </Zoom>
        </div>
        <div>
          <div className="row">
            <Fade left>
              <div className="col-lg-6 info">
                <div className="row">
                  <div className="col-12 name ">
                    <h3>Trần Kim Cường</h3>
                  </div>
                </div>
                <div className="row item-content">
                  <div className="col-4  ">
                    <ImLocation2 className="mr-1 icon" /> Location
                  </div>
                  <div className="col-8">: Ho Chi Minh city</div>
                </div>
                <div className="row item-content">
                  <div className="col-4  ">
                    <FaPhoneAlt className="mr-1 icon" /> Phone
                  </div> 
                  <div className="col-8">: 096 793 5842</div>
                </div>
                <div className="row item-content">
                  <div className="col-4 ">
                    <FaFacebook className="mr-1 icon" /> Facebook
                  </div>
                  <div className="col-8"><a href='https://www.facebook.com/kimcuongtran1234' target='_blank' rel="noreferrer" className='text-white'>: kimcuongtran1234</a></div>
                </div>
                <div className="row item-content">
                  <div className="col-4 ">  
                    <MdEmail className="mr-1 icon" /> Email
                  </div>
                  <div className="col-8">: trankimcuongabcd@gmail.com</div>
                </div>
              </div> 
            </Fade>
            <Fade bottom>
              <div className="col-lg-6 d-flex align-items-center justify-content-center register__form">
                <form>
                  <h3 className="font-weight-bold text-center pb-4 text-dark">
                    Contact Me
                  </h3>
                  <div className="form-group row ">
                    <div className="col-12 register__icon register__user ">
                      <span className="fa fa-user" />
                      <input placeholder="Name" className="form-control" />
                    </div>
                    <div className="col-12 register__icon register__email ">
                      <span className="fa fa-envelope" />
                      <input
                        type="email"
                        className="form-control"
                        id="InputEmail"
                        aria-describedby="emailHelp"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea3"
                      rows={4}
                      placeholder="message"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="my-4">
                    Send
                  </button>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </GetInTouch>
  );
};
const GetInTouch = styled.div`
  color: white;
  background-color: #4c6e71;
  padding: 50px 20px;
  @media (max-width: 480px) {
    padding: 50px 0px;
  }
  .heading {
    color: #ef5350;
    font-size: 60px;
    @media (max-width: 575px) {
      font-size: 50px;
    }
  }
  .contact-text {
    text-align: justify;
  }
  .info {
    padding-bottom:20px;
    .name {
      color: #ef5350;
      padding-bottom:10px;
    }
    .item-content {
      padding-bottom:10px;
      @media (max-width: 480px) {
        div,a {
          font-size: 16px;
          padding-right:0px;
        }
      }
      .icon {
        color: #7ed321;
      }
    }
  }
  .register__form {
    width: 100%;
    .form-group{
      margin-bottom:0px;
    }
    form {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      width: 100%;
      box-shadow: 1px 8px 20px -10px #888888;
      .register__icon {
        position: relative;
        color: #aaa;
        font-size: 16px;
        padding-bottom: 20px;
        .fa-user, .fa-envelope {
          position: absolute;
          top: 8px;
          left: 28px;
        }
        .fa {
          color: #174447;
        }
        input {
          text-indent: 32px;
          max-width: 1000px;
          height: 32px;
          background: white;
          border: 1px solid #aaa;
          border-radius: 20px;
        }
      }
      @media screen and (max-width: 1200px) {
        width: 90%;
      }
      @media screen and (max-width: 996px) {
        width: 100%;
      }
      #exampleFormControlTextarea3 {
        border-radius: 20px;
      }
      button {
        border: 2px solid #174447 !important;
        transition: 0.5s;
        background-color: #e6f4f1;
        padding: 5px 80px;
        border-radius: 10px;
        &:hover {
          border: 2px solid #174447;
          background-color: white;
        }
      }
    }
  }
`;
export default Contact;
