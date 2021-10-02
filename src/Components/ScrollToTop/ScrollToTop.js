import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import styled from "styled-components";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Scroll className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="icon-angle">
                    <FaAngleUp />
                </div>
            )}
        </Scroll>
    );
}
const Scroll = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  animation: fadeIn 700ms ease-in-out 1s both;
  cursor: pointer;
  .icon-angle {
    color: whitesmoke;
    background: red;
    border-radius: 50%;
    padding: 5px;
    svg {
      font-size: 30px;
    }
  }
`;
