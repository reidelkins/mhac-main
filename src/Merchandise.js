import "./styles.css";
import React, { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Merchandise() {
  const [loading, setLoading] = useState(false);
  const [toTop, setToTop] = useState("toTop none")
  const [scrollingUp, setScrollingUp] = useState("init")
  const [dropdown, setDropdown] = useState(false)

  var scroll = Scroll.animateScroll;

  var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 800) {
      let none = document.getElementsByClassName("toTop none");
      let hide = document.getElementsByClassName("toTop hide");
      if (hide[0] || none[0]) {
        setToTop("toTop show")
      } else {
        return null
      }
    } else {
      let show = document.getElementsByClassName("toTop show");
      if (show[0]) {
        setToTop("toTop hide")
      } else {
        return null
      }
    }
  };

  window.addEventListener("scroll", myScrollFunc);
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y < 150) {
        if (scrollingUp != "init") {
          setScrollingUp("init")
          console.log("init")
        }
      } else {
        if (y > window.scrollY) {
          if (scrollingUp != true) {
            setScrollingUp(true)
            console.log("yes")
          }
        } else if (y < window.scrollY) {
          if (scrollingUp != false) {
            setScrollingUp(false)
            console.log("no")
          }
        }
      }
      setY(window.scrollY);
    }, [y]
  );
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    document.title = "Merchandise | Mile High Ape Club"
    AOS.init();
    setTimeout(() => { 
      setLoading(false);
    }, 1000);
  }, []);

  const renderDropdown = () => {
    if(dropdown === true) {
      return (
        <div className="dropdown">
          <button
            className="navLink"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => setDropdown(!dropdown)}
          >
            <a href="/">Home</a>
          </button>
          <button
            className="navLink"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => setDropdown(!dropdown)}
          >
            <a href="/#story">Storyline</a>
          </button>
          <button
            className="navLink"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => setDropdown(!dropdown)}
          >
            <a href="/#roadmap">Roadmap</a>
          </button>
          <button
            className="navLink"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => setDropdown(!dropdown)}
          >
            <a href="/merchandise">Merchandise</a>
          </button>
          <button
            className="navLink"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => setDropdown(!dropdown)}
          >
            <a href="/staking.pdf" target="_blank">Staking</a>
          </button>
        </div>
      )
    } else {
      return null
    }
  }

  const mobileNav = (name) => {
    return (
      <>
        <div className={name}>
          <a href="/">
            <img className="mobileLogo" src="/images/logo.png" />
          </a>
          <div className={`buttonWrapper ${dropdown ? "open" : "closed"}`} onClick={() => setDropdown(!dropdown)}>
            <div className="hamburger">
            </div>
          </div>
          {/*<img className="menu" src="/images/menuwhite.png" onClick={() => setDropdown(!dropdown)}/>*/}
        </div>
        {renderDropdown()}
      </>
    )
  }

  const renderNavbar = () => {
    if (scrollingUp === "init") {
      return (
        <>
          {mobileNav("mobileNavinit")}
          <div className="navBarinit">
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
              onClick={() => setDropdown(!dropdown)}
            >
              <a href="/#story">Storyline</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
              onClick={() => setDropdown(!dropdown)}
            >
              <a href="/#roadmap">Roadmap</a>
            </button>
            <a href="/">
              <img
                className="logo"
                src="images/logo.png"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </a>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="/merchandise">Merchandise</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="/staking.pdf" target="_blank">Staking</a>
            </button>
          </div>
        </>
      ) 
    } else if (scrollingUp === true) {
      return (
        <>
          {mobileNav("mobileNav")}
          <div className="navBar">
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
              onClick={() => setDropdown(!dropdown)}
            >
              <a href="/#story">Storyline</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
              onClick={() => setDropdown(!dropdown)}
            >
              <a href="/#roadmap">Roadmap</a>
            </button>
            <a href="/">
              <img
                className="logo"
                src="images/logo.png"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </a>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="/merchandise">Merchandise</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="/staking.pdf" target="_blank">Staking</a>
            </button>
          </div>
        </>
      ) 
    }else {
      return (
        <>
          {mobileNav("mobileNavnone")}
          <div className="navBarnone">
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
              onClick={() => setDropdown(!dropdown)}
            >
              <a href="/#story">Storyline</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
              onClick={() => setDropdown(!dropdown)}
            >
              <a href="/#roadmap">Roadmap</a>
            </button>
            <a href="/">
              <img
                className="logo"
                src="images/logo.png"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </a>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="/merchandise">Merchandise</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="/staking.pdf" target="_blank">Staking</a>
            </button>
          </div>
        </>
      )
    }
  }

  if (loading === true) {
    return (
      <div className="monkey">
        <img className="loading" src="images/loading.png" />
      </div>
    );
  } else {
    return (
      <div className="comingsoon">
        <div className="clouds">
          <img style={{ opacity: "0" }} src="images/clouds.png" />
        </div>
        <div className="monkey">
          <img style={{ opacity: "0" }} src="images/ape.gif" />
        </div>
        {renderNavbar()}
        <img className="construction" src="/images/comingsoon.png" />
        
        <div className="footer">
            <h1>Copyright © Mile High Ape Club 2022</h1>
            <div className="socials">
              <a href="https://discord.gg/milehighapeclub" target="_blank">
                <img src="images/discord.png" />
              </a>
              <a href="https://twitter.com/milehighapeclub" target="_blank">
                <img src="images/twitter.png" />
              </a>
              <a href="https://www.instagram.com/milehighapeclub/" target="_blank">
                <img src="images/instagram.png" />
              </a>
            </div>
          </div>
      </div>
    );
  }
}
