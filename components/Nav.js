import React, { useState } from "react";
// import "./navbar.css";

// import { GiHamburgerMenu } from "react-icons/gi";

// import { a } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img
            src="https://nftify-platform.s3.ap-southeast-1.amazonaws.com/logo/62d170f22994a0bed7213b80-1658926016888.png"
            className=""
          />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="https://shopinose.com/">HOME</a>
            </li>
            <li>
              <a href="https://shopinose.com/">TEAM</a>
            </li>
            <li>
              <a href="https://shopinose.com/">WHITPAPER</a>
            </li>
            <li>
              <a href="https://shopinose.com/">NFTs</a>
            </li>
            <li>
              <a href="https://shopinose.com/swap">Swap</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <img
                src="https://theclubappe-asad-ghouri.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhamburger.bd56af02.png&w=96&q=75"
                width={60}
                height={40}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
