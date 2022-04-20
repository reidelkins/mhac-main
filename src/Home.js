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

export default function Home() {
  const [showDropdown1, setShowDropdown1] = useState(false)
  const [showDropdown2, setShowDropdown2] = useState(false)
  const [showDropdown3, setShowDropdown3] = useState(false)
  const [showDropdown4, setShowDropdown4] = useState(false)
  const [showDropdown5, setShowDropdown5] = useState(false)
  const [preMint, setPreMint] = useState(false)
  const [postMint, setPostMint] = useState(false)
  const [phase1, setPhase1] = useState(false)
  const [phase2, setPhase2] = useState(true)
  const [phase3, setPhase3] = useState(false)
  const [loading, setLoading] = useState(true)
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
          //console.log("init")
        }
      } else {
        if (y > window.scrollY) {
          if (scrollingUp != true) {
            setScrollingUp(true)
            //console.log("yes")
          }
        } else if (y < window.scrollY) {
          if (scrollingUp != false) {
            setScrollingUp(false)
            //console.log("no")
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
            <a href="https://airport.milehighapeclub.com/">Airport (Staking V2)</a>
          </button>
          <button
            className="navLink"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => setDropdown(!dropdown)}
          >
            <Link
              activeClass="active"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setDropdown(!dropdown)}
            >
              Roadmap
            </Link>
          </button>
          <button
            className="navLink"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => setDropdown(!dropdown)}
          >
            <a href="https://milez.milehighapeclub.com/">$Milez Store</a>
          </button>
          <button
            className="navLink"
            data-aos="zoom-in"
            data-aos-duration="1000"
            onClick={() => setDropdown(!dropdown)}
          >
            <a href="https://staking.milehighapeclub.com/" target="_blank">Staking</a>
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
              <a href="https://airport.milehighapeclub.com/">Airport (Staking V2)</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Link
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Roadmap
              </Link>
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
              <a href="https://milez.milehighapeclub.com/">$Milez Store</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="https://staking.milehighapeclub.com/" target="_blank">Staking</a>
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
              <a href="https://airport.milehighapeclub.com/">Airport (Staking V2)</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Link
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Roadmap
              </Link>
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
              <a href="https://milez.milehighapeclub.com/">$Milez Store</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="https://staking.milehighapeclub.com/" target="_blank">Staking</a>
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
              <a href="https://airport.milehighapeclub.com/">Airport (Staking V2)</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Link
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Roadmap
              </Link>
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
              <a href="https://milez.milehighapeclub.com/">$Milez Store</a>
            </button>
            <button
              className="navLink"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a href="https://staking.milehighapeclub.com/" target="_blank">Staking</a>
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
      <div className="App">
        <button className={toTop} onClick={() => scroll.scrollToTop()}><img className="arrow" src="/images/up.png" /></button>
        <div className="clouds">
          <img style={{ opacity: "0" }} src="images/clouds.png" />
        </div>
        {renderNavbar()}
        <div className="monkey">
          <img style={{ opacity: "0" }} src="images/ape.gif" />
        </div>
        <div className="header" data-aos="fade-up" data-aos-duration="1000">
          <div className="headerBody">
            <h1>MILE HIGH APE CLUB</h1>
            <h2>
              6200 Next-Generation Mile High Apes
              <br />
              Uniquely Designed and Built on the Solana Blockchain.
            </h2>
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
        <div className="mint" data-aos="fade-up" data-aos-duration="1000">
          <div className="mintInner">
            <Swiper
              loop={true}
              effect={"coverflow"}
              centeredSlides={true}
              grabCursor={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 30,
                depth: 200,
                modifier: 1,
                slideShadows: true
              }}
              modules={[Autoplay, EffectCoverflow]}
            >
              <SwiperSlide>
                <img src="nfts/nft1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft4.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft5.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft6.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft7.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft8.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft9.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft10.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft11.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft12.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft13.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft14.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft15.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft16.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft17.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="nfts/nft18.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="body">
          <div className="storyline" id="storyline">
            <h1
              className="subTitle"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              LORE
            </h1>
            <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
              Storyline
            </h1>
            <div
              className="section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <img className="left" src="images/timeline1.png" />
              </div>
              <div className="rightText">
                <h1>
                  In the heart of Cape Town South Africa resides a wild troop of
                  apes. These unique apes are known for being extremely
                  intelligent, entertaining, and down right unpredictable. A
                  group of investors who represent the largest Zoo in London
                  grew very fond of these apes. They collectively agreed that
                  these apes would be a perfect fit for their zoo and would draw
                  in tons of new business. The money hungry zoo conglomerate
                  hired poachers to tranquilize and capture the apes and have
                  them delivered straight to London immediately. The apes were
                  then loaded onto a massive 767 Airliner headed to LDN nonstop.
                </h1>
              </div>
            </div>
            <div
              className="section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="leftText">
                <h1>
                  During the loading process the apes awaken and realize what
                  has happened. They all initially start to panic until one of
                  them figures out their method of escape! A distracted handler forgot to remove
                  the key from the lock of the cage. The ape swiped the key and
                  stayed quiet, waiting for the perfect moment to break free. As
                  the cargo compartment door closed the ape unlatched his cage
                  and continued to help his ape friends escape as well! As the
                  engines started to spool the apes knew it was to late to turn
                  back. The apes saw this as a perfect opportunity to freely see
                  the world and enjoy themselves! So they devised a plan to take
                  control of the massive airliner. The plan was to wiggle their
                  way into the cabin through the recirculation vents and catch
                  the humans by surprise!
                </h1>
              </div>
              <div>
                <img className="right" src="images/timeline2.png" />
              </div>
            </div>
            <div
              className="section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <img className="left" src="images/timeline3.png" />
              </div>
              <div className="rightText">
                <h1>
                  The massive airliner takes off and the apes quickly get into
                  position to take the plane by storm! One of the apes sneaks up
                  to the cabin to see if the coast is clear. A woman binging her
                  second straight season of Grey’s Anatomy drops her head phone
                  and sees the ape standing next to the seat in the aisle. She
                  then says to the passenger next to her, “I love your emotional
                  support animal he’s so cute, what kind of dog is that?” The
                  passenger responds “I don’t have any pets what do you mean?!”
                  as she glances down at the ape who then winks at her before
                  signaling his friends. Both passengers scream! “M M M
                  Monkeyyyyyys!” The entire cabin panics and all hell breaks
                  lose! Hundreds of apes run rampant as they climb and jump over
                  all the passengers!
                </h1>
              </div>
            </div>
            <div
              className="section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="leftText">
                <h1>The panicked passengers saw no other way to escape the ape madness than to make a leap for the ocean after take off. They all grabbed the life preservers under their seats and made a run for the back door! The flight attendant popped open the door and the passengers jumped one by one! This relinquished full control of the airliner to the apes and they were on there merry way!</h1>
              </div>
              <div>
                <img className="right" src="images/timeline4.png" />
              </div>
            </div>
            <div
              className="section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <img className="left" src="images/timeline5.png" />
              </div>
              <div className="rightText">
                <h1>The apes cheered for joy when their master plan was accomplished! As the apes celebrated they explored their new airliner and came across the luggage compartments filled with beautiful new clothes and unique items the passengers left behind. Pleased with their new outfits and the ability to travel where ever they pleased the apes threw a massive party in the sky. Creating creating what we now know it as, the Mile High Ape Club.</h1>
              </div>
            </div>
            <div
              className="section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="leftText">
                <h1>Where will these Mile High Apes end up next?! Only they can know for sure! To be continued...</h1>
              </div>
              <div>
                <img className="right" src="images/timeline6.png" />
              </div>
            </div>
          </div>
          <div className="roadmap" id="roadmap">
            <h1
              className="subTitle"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              ROADMAP
            </h1>
            <h1 className="title" data-aos="fade-up" data-aos-duration="1000">
              Flightpath 2.0
            </h1>
            <div className="flightContainer">
              {preMint ?
                  <ul>
                    <li>
                      [x] Creative Contests for Whitelist
                    </li>
                    <li>
                      [x] Generate Sky-High Levels of Hype
                    </li>
                    
                  </ul>
              : null }
              {postMint ?
                  <ul>
                    <li>
                      [x] Magic Eden Listing (https://magiceden.io/marketplace/mile_high_ape_club)
                    </li>
                    <li>
                      [x] Discord Verification and HijackeDAO Formation
                    </li>
                    <li>
                      [x] Release of Staking V1 for $Milez with help from Doge Capital
                    </li>
                    <li>
                      [x] Release Episode 1 of MHAC’s Animated Series
                    </li>
                    <li>
                      [x] Jet-A Serum Reveal and $Milez Raffles
                    </li>
                    <li>
                      [x] Partner with InceptionAIO for Discord Moderation, Marketing, and Development Support
                    </li>
                  </ul>
              : null }
              {phase1 ?
                  <ul>
                    <li>[ ] Hijacked Ape User Manual (Intro to Hijacked)</li>
                    <li>
                      [ ] All-Inclusive Island Getaway for 2 Giveaway
                    </li>
                    <li>
                      [ ] Further Development of Animated Series
                    </li>
                    <li>
                      [ ] Launch of Team-Based P2E Idle RPG Game
                    </li>
                    <li>
                      [ ] MHAC Miami Meet Up at a Private Hangar
                    </li>
                    <li>
                      [ ] DAO Restructuring (WL Scouts, Mint Reviews, DAO Vault)
                    </li>
                  </ul>
              : null }
              {phase2 ?
                  <ul>
                    <li>[ ] Begin Beta Testing on Real Life Marketplace within our Admiral Club</li>
                    <li>
                      [ ] Begin Development of MHAC Cookies to be sold in Major Airports and Airlines
                    </li>
                    <li>[ ] Further Development of our MHAC animated series</li>
                  </ul>
              : null }
              {phase3 ?
                  <ul>
                    <li>[ ] Continued Development of our Animated Series (Potentially Spin Offs as well)</li>
                    <li>
                      [ ] Full Launch of Airline Travel Marketplace
                    </li>
                    <li>
                      [ ] Full Scale Production and Distribution of MHAC Cookies Worldwide to Major Airlines and Airports
                    </li>
                    <li>
                      [ ] Roadmap3.0 Release
                    </li>
                  </ul>
              : null }
              <img style={{width: "100%", marginBottom:"-4px"}} src="/images/topflight.png" />
              <div className="flightWrapper">
                <div className="flight" onMouseEnter={() => {setPreMint(true), setPostMint(false), setPhase1(false), setPhase2(false), setPhase3(false)}}>
                  <img src={preMint ? "/images/premint-2.png" : "/images/premint.png"} />
                </div>
                <div className="flight">
                  <img src="/images/1.png" />
                </div>
                <div className="flight" onMouseEnter={() => {setPreMint(false), setPostMint(true), setPhase1(false), setPhase2(false), setPhase3(false)}}>
                  <img src={postMint ? "/images/postmint-2.png" : "/images/postmint.png"} />
                </div>
                <div className="flight">
                  <img src="/images/2.png" />
                </div>
                <div className="flight" onMouseEnter={() => {setPreMint(false), setPostMint(false), setPhase1(true), setPhase2(false), setPhase3(false)}}>
                  <img src={phase1 ? "/images/phase1-2.png" : "/images/phase1.png"} />
                </div>
                <div className="flight">
                  <img src="/images/3.png" />
                </div>
                <div className="flight" onMouseEnter={() => {setPreMint(false), setPostMint(false), setPhase1(false), setPhase2(true), setPhase3(false) }}>
                  <img src={phase2 ? "/images/phase2-2.png" : "/images/phase2.png"} />
                </div>
                <div className="flight">
                  <img src="/images/4.png" />
                </div>
                <div className="flight" onMouseEnter={() => {setPreMint(false), setPostMint(false), setPhase1(false), setPhase2(false), setPhase3(true)}}>
                  <img src={phase3 ? "/images/phase3-2.png" : "/images/phase3.png"} />
                </div>
                <div className="flight">
                  <img src="/images/5.png" />
                </div>
              </div>
            </div>
            <div className="team" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="subTitle">TEAM</h1>
              <h1 className="title">The Founders</h1>
              <div className="teamInner">
                <div className="teamMember">
                  <img src="team/Chris.png" />
                  <div>
                    <h1>Crypto Chris</h1>
                    <h2>CEO</h2>
                    <div className="line" />
                    <h3>
                      Serial entrepreneur, business consultant, leader
                    </h3>
                  </div>
                </div>
                <div className="teamMember">
                  <img src="team/Zoomy.png" />
                  <div>
                    <h1> Aerial Ape</h1>
                    <h2>Project Advisor & Social Media</h2>
                    <div className="line" />
                    <h3>Dapper Ducks Co-Founder & Airline Pilot</h3>
                  </div>
                </div>
                <div className="teamMember">
                  <img src="team/ApeFather.png" />
                  <div>
                    <h1>Ape Father</h1>
                    <h2>Project Advisor & Discord Management</h2>
                    <div className="line" />
                    <h3>Dapper Ducks Co-Founder, Father, NFT Enthusiast</h3>
                  </div>
                </div>
              </div>
              <div className="teamInner">
                <div className="teamMember">
                  <img src="team/Humble.png" />
                  <div>
                    <h1>Humble Ape (Anthony)</h1>
                    <h2>COO, Community Management, Creative director, and Cybersecurity. </h2>
                    <div className="line" />
                    <h3>Man of God, NFT, and Crypto Enthusiast.</h3>
                  </div>
                </div>
                <div className="teamMember">
                  <img src="team/BottomRoller.png" />
                  <div>
                    <h1>Bottom Roller</h1>
                    <h2>The Dev</h2>
                    <div className="line" />
                    <h3>Cool guy that likes tech stuff.</h3>
                  </div>
                </div>
                <div className="teamMember">
                  <img src="team/Bahm.png" />
                  <div>
                    <h1>Bahm Ape</h1>
                    <h2>Executive Manager, Marketing</h2>
                    <div className="line" />
                    <h3>NFT Enthusiast, Organizational Queen, Dog Mother and Sci-Fi aficionado.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="subTitle">FAQ</h1>
            <h1 className="title">Frequently Asked Questions</h1>
            <div
              className="question"
            >
              <div style={{position:"relative"}}>
                <h1
                onClick={() => setShowDropdown1(!showDropdown1)}
                >
                  What is Mile High Ape Club?
                </h1>
                {showDropdown1 ? <img className="arrow" src="/images/up.png" /> : <img className="arrow" src="/images/down.png" />}
              </div>
              {showDropdown1 ? (
                <h2>
                  Mile High Ape Club is a collection of apes from all parts of
                  the world that found themselves on the wrong side of the
                  cockpit door.
                </h2>
              ) : null}
            </div>
            <div className="line" />
            <div
              className="question"
            >
              <div style={{position:"relative"}}>
                <h1 onClick={() => setShowDropdown2(!showDropdown2)}>
                  What is the total supply?
                </h1>
                {showDropdown2 ? <img className="arrow" src="/images/up.png" /> : <img className="arrow" src="/images/down.png" />}
              </div>
              {showDropdown2 ? (
                <h2>
                  The total supply is be 6,600 Apes. 100 of those apes will be
                  reserved by the team for promotional giveaways.
                </h2>
              ) : null}
            </div>
            <div className="line" />
            <div
              className="question"
            >
              <div style={{position:"relative"}}>
                <h1
                onClick={() => setShowDropdown3(!showDropdown3)}
                >
                  What is the mint price?
                </h1>
                {showDropdown3 ? <img className="arrow" src="/images/up.png" /> : <img className="arrow" src="/images/down.png" />}
              </div>
              {showDropdown3 ? (
                <h2>
                  Whitelist will mint at 2 SOL, public sale will be 2.5 SOL.
                </h2>
              ) : null}
            </div>
            <div className="line" />
            <div
              className="question"
            >
              <div style={{position:"relative"}}>
                <h1
                onClick={() => setShowDropdown4(!showDropdown4)}
                >
                  When will MHAC be minting?
                </h1>
                {showDropdown4 ? <img className="arrow" src="/images/up.png" /> : <img className="arrow" src="/images/down.png" />}
              </div>
              {showDropdown4 ? (
                <h2>
                  MHAC will be minting on February 12, 02:00 UTC. First Class will be able to mint 3 hours prior to public sale; February 11, 23:00 UTC.
                </h2>
              ) : null}
            </div>
            <div className="line" />
            <div
              className="question"
            >
              <div style={{position:"relative"}}>
                <h1
                onClick={() => setShowDropdown5(!showDropdown5)}
                >
                  How do you plan on providing the MHAC community with future
                  value?
                </h1>
                {showDropdown5 ? <img className="arrow" src="/images/up.png" /> : <img className="arrow" src="/images/down.png" />}
              </div>
              {showDropdown5 ? (
                <h2>
                  We are going to integrate a staking system, as well as a V2
                  Drop of HiJacked Apes. Further down the line we plan on
                  creating an all inclusive NFT analytics website for all your
                  needs.
                </h2>
              ) : null}
            </div>
          </div>
          <div className="footer">
            <h1>Copyright © Mile High Ape Club - 2022</h1>
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
      </div>
    );
  }
}
