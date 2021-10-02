import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <PortfolioSlider className="bg-light">
      <Fade left>
      <div className="container">
        <h1 className="title"> My Portfolio</h1>
        <Slider {...settings}>
          <div className="portfolio-content">
            <div className="portfolio-item1">
              <img src="./img/bookingfilm.png" alt="booking ticket" />
            </div>
            <div className="portfolio-item2">
              <div className="description">
                <h5>Movie Booking Ticket</h5>
                <h6>
                  <span>-Description</span>: a website where you can book movie tickets
                </h6>
                <h6>
                  <span>-Responsibility</span>: Development
                </h6>
                <h6>
                  <span>-Technology</span>: HTML5, CSS3, reactjs, ES6,
                  react-router-dom, antd, bootstrap, react-responsive,..
                </h6>
                <button className='github'>Link gitHub</button>
                <button className='demo'>Link Demo</button>
              </div>
            </div>
          </div>
          <div className="portfolio-content">
            <div className="portfolio-item1">
              <img src="./img/Englishteacher.png" alt="teacher" />
            </div>
            <div className="portfolio-item2">
              <div className="description">
                <h5>Language Center</h5>
                <h6>
                  <span>-Description</span>: Information about a Language Center
                </h6>
                <h6>
                  <span>-Responsibility</span>: Development
                </h6>
                <h6>
                  <span>-Technology</span>: HTML5, CSS3, SASS, javascript, API
                </h6>
                <button className='github'>Link gitHub</button>
                <button className='demo'>Link Demo</button>
              </div>
            </div>
          </div>
          <div className="portfolio-content">
            <div className="portfolio-item1">
              <img src="./img/portfolio.png" alt="portfolio" />
            </div>
            <div className="portfolio-item2">
              <div className="description">
                <h5>My Portfolio</h5>
                <h6>
                  <span>-Description</span>: My portfolio where you can get my
                  information and my done projects
                </h6>
                <h6>
                  <span>-Responsibility</span>: Development
                </h6>
                <h6>
                  <span>-Technology</span>: HTML5, CSS3, reactjs, ES6,
                  styled-component, react-ityped,..
                </h6>
                <button className='github'>Link gitHub</button>
                <button className='demo'>Link Demo</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      </Fade>
    </PortfolioSlider>
  );
};
const PortfolioSlider = styled.div`
  padding: 50px;
  @media (max-width:480px){
    padding:50px 20px;
  }
  h5{
    font-weight:bold;
  }
  h6{
    font-size:17px;
    @media (max-width:767px){
      font-size:16px;
    }
  }
  span{
    font-size:17px;
    font-weight:bold;
    @media (max-width:767px){
      font-size:16px;
    }
  }
  .title {
    text-align: center;
    color: #b71c1c;
  }
  .portfolio-content {
    padding: 80px 160px;
    position: relative;
    button{
      border: none;
      padding:0px 5px;
      border-radius:5px;
      margin:0px 5px;
      color: #fff;
      font-size:17px;
    }
    .demo{
      background-color: #507576;
      transition:0.2s ease-in-out;
      &:hover{
        background-color: #0dab8e;
      }
    }
    .github{
      background-color:#e23939;
      transition:0.2s ease-in-out;
      &:hover{
        background-color:#ff0000;
      }
    }
    @media (max-width: 996px) {
      padding: 10px;
      padding-bottom: 160px;
    }
    .portfolio-item1 {
      border: 2px solid #222e3b;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 400px;
      }
      @media (max-width: 768px) {
        img {
          height: 300px;
        }
      }
    }
    .portfolio-item2 {
      border: 2px solid #222e3b;
      overflow: hidden;
      border-radius: 10px;
      position: absolute;
      bottom: 2px;
      right: 2px;
      background-color: white;
      .description {
        width: 400px;
        height: 280px;
        margin-left: 10px;
        padding-top: 10px;
        p {
          margin: 10px 0px;
          font-size: 16px;
        }
      }
      @media (max-width: 768px) {
        .description {
          width: 240px;
          height: 240px;
        }
      }
    }
  }
  .slick-dots li button:before {
    font-size: 15px;
  }
  .slick-prev:before {
    color: #e24f69;
    font-size: 50px;
    margin: 20px;
    @media (max-width:480px){
      font-size:35px
    }
  }
  .slick-next:before {
    color: #e24f69;
    font-size: 50px;
    @media (max-width:480px){
      font-size:35px
    }
  }
  .slick-prev {
    left: -70px;
    top: 46%;
    @media (max-width:480px){
      left: -55px;
    }
  }
  .slick-next {
    top: 46%;
    right: -18px;
  }
`;

export default Portfolio;
