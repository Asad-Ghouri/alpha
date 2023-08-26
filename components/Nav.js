import React, { useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img
            src="https://itishstudios.net/assert/78b4ba1d-c647-4d6f-aab6-a2eff6d6957e-removebg-preview-e1680104061890.png"
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
            {/* <li>
              <a href="https://shop.giankycoin.com/" className="elementor-item">
                MarketPlace
              </a>
            </li> */}
            <li>
              <Link href="/" className="elementor-item elementor-item-active">
                Home
              </Link>
            </li>

            <li>
              <Link href="/giankyAi" className="elementor-item elementor-item-active">
              Gianky AI
              </Link>
            </li>
            <li>
              <Link href="/mint" className="elementor-item">
                Mint
              </Link>
            </li>
            {/* <li>
              <Link href="/stake" className="elementor-item">
                Stake
              </Link>
            </li> */}
            <li>
              <Link href="/swap" className="elementor-item">
                Swap
              </Link>
            </li>
            {/* <li>
              <Link className="cw" href="/#team">
                Team
              </Link>
            </li> */}
            <li>
              <Link href="/StarterStake" className="elementor-item">
                Starter Stake
              </Link>
            </li>
            <li>
              <Link href="/BasicStake" className="elementor-item">
                Basic Stake
              </Link>
            </li>
            <li>
              <Link href="/StandardStake" className="elementor-item">
                Standard Stake
              </Link>
            </li>
            <li>
              <Link href="/VipStake" className="elementor-item">
                Vip Stake
              </Link>
            </li>
            <li>
              <Link href="/PremiumStake" className="elementor-item">
                Premium Stake
              </Link>
            </li>
            <li>
              <Link href="/DiamondStake" className="elementor-item">
                Diamond Stake
              </Link>
            </li>
            {/* <li>
              <a
                href="https://itishstudios.net/assert/GIANKYNFTSWhitePaper.pdf"
                download
              >
                Whitepaper English
              </a>
            </li>
            <li>
              <a href="https://itishstudios.net/assert/Italic.pdf" download>
                Whitepaper Italiano
              </a>
            </li> */}
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
