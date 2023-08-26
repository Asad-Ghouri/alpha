import React from "react";

import Navbar from "./Nav";

import { ConnectWallet } from "@thirdweb-dev/react";

import Link from "next/link";

import { SocialIcon } from "react-social-icons";

function Connectbtn() {
  var cbtn = document.getElementById("connectWallet");
  if (cbtn) {
    cbtn.click();
  } else {
    console.log("id is not get");
  }
}
export const Header = () => {
  return (
    <>
      {/* <div className="connect-wallss">
        <ConnectWallet id="connectWallet" />{" "}
      </div> */}
      <div className="main-header">
        <div>
          <div className="elementor-container elementor-column-gap-default head">
            <div
              className="elementor-column elementor-col-25 elementor-element elementor-element-5bdcc19"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-041bb6b elementor-widget elementor-widget-image"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n            /*! elementor - v3.11.5 - 14-03-2023 */\n            .elementor-widget-image{\n              text-align:center}\n            .elementor-widget-image a{\n              display:inline-block}\n            .elementor-widget-image a img[src$=".svg"]{\n              width:48px}\n            .elementor-widget-image img{\n              vertical-align:middle;\n              display:inline-block}\n          ',
                      }}
                    />
                    <a href="#">
                      <img
                        width={150}
                        height={150}
                        src="https://itishstudios.net/assert/78b4ba1d-c647-4d6f-aab6-a2eff6d6957e-removebg-preview-e1680104061890.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-25 elementor-element elementor-element-07e6ea8 iw"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-34e382e wwid elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-widget elementor-widget-nav-menu"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container wwid">
                    <link href="https://shopinose.com/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css" />
                    <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-grow">
                      <ul className="elementor-nav-menu">
                        {/* <li>
                          <a
                            href="https://shop.giankycoin.com/"
                            className="elementor-item"
                          >
                            MarketPlace
                          </a>
                        </li> */}
                        <li>
                          <Link href="/" className="elementor-item">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href="/giankyAi" className="elementor-item">
                          Gianky AI
                          </Link>
                        </li>
                          <li>
                          <Link href="/mint" className="elementor-item">
                            Mint
                          </Link>
                        </li>
                        {/* <li>
                          <a href="#paper" className="elementor-item">
                            WHITEPAPER
                          </a>
                        </li>
                        <li>
                          <a href="#nft" className="elementor-item">
                            NFTs
                          </a>
                        </li> */}
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

                        <li>
                          <Link href="#" className="cw">
                            Stake
                          </Link>
                        </li>

                        <div className="dropdown stakedropdown">
                          <li>
                            <Link
                              href="/StarterStake"
                              className="dropdown-link"
                            >
                              Starter Stake
                            </Link>
                          </li>
                          <li>
                            <Link href="/BasicStake" className="dropdown-link">
                              Basic Stake
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/StandardStake"
                              className="dropdown-link"
                            >
                              Standard Stake
                            </Link>
                          </li>
                          <li>
                            <Link href="/VipStake" className="dropdown-link">
                              Vip Stake
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/PremiumStake"
                              className="dropdown-link"
                            >
                              Premium Stake
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/DiamondStake"
                              className="dropdown-link"
                            >
                              Diamond Stake
                            </Link>
                          </li>
                        </div>

                        <li>
                          <a
                            className="cw nav-link"
                            href="https://itishstudios.net/assert/GIANKYNFTSWhitePaper.pdf"
                            download
                          >
                            Whitepaper
                          </a>
                        </li>

                        <div className="dropdown pdropdown">
                          <li>
                            <a
                              href="https://itishstudios.net/assert/GIANKYNFTSWhitePaper.pdf"
                              className="dropdown-link"
                              download
                            >
                              Whitepaper English
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://itishstudios.net/assert/Italic.pdf"
                              className="dropdown-link"
                              download
                            >
                              Whitepaper Italiano
                            </a>
                          </li>
                        </div>
                        {/* <li>
                          {" "}
                          <Link href="/whitePaper">WHITEPAPER</Link>{" "}
                        </li> */}
                      </ul>
                    </nav>
                    <div
                      className="elementor-menu-toggle style-bwXsI"
                      id="style-bwXsI"
                    >
                      <i className="eicon-menu-bar"></i>
                      <i className="elementor-menu-toggle__icon--close eicon-close"></i>
                      <span className="elementor-screen-only">Menu</span>
                    </div>
                    <nav
                      className="elementor-nav-menu--dropdown elementor-nav-menu__container style-nhrtd"
                      id="style-nhrtd"
                    >
                      <ul className="elementor-nav-menu">
                        <li>
                          <a
                            href="https://shopinose.com/#home"
                            className="elementor-item"
                          >
                            HOME
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shopinose.com/#team"
                            className="elementor-item"
                          >
                            Mint
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="https://shopinose.com/#paper"
                            className="elementor-item"
                          >
                            WHITEPAPER
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shopinose.com/#nft"
                            className="elementor-item"
                          >
                            NFTs
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="https://shopinose.com/swap/"
                            className="elementor-item"
                          >
                            Swap
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-25 elementor-element elementor-element-4c030d0"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-54736fc elementor-shape-circle elementor-hidden-tablet elementor-hidden-mobile elementor-grid-0 elementor-widget elementor-widget-social-icons"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n            /*! elementor - v3.11.5 - 14-03-2023 */\n            .elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container{\n              line-height:1;\n              font-size:0}\n            .elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid{\n              display:inline-grid}\n            .elementor-widget-social-icons .elementor-grid{\n              grid-column-gap:var(--grid-column-gap,5px);\n              grid-row-gap:var(--grid-row-gap,5px);\n              grid-template-columns:var(--grid-template-columns);\n              justify-content:var(--justify-content,center);\n              justify-items:var(--justify-content,center)}\n            .elementor-icon.elementor-social-icon{\n              font-size:var(--icon-size,25px);\n              line-height:var(--icon-size,25px);\n              width:calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)));\n              height:calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)))}\n            .elementor-social-icon{\n              --e-social-icon-icon-color:#fff;\n              display:inline-flex;\n              background-color:#818a91;\n              align-items:center;\n              justify-content:center;\n              text-align:center;\n              cursor:pointer}\n            .elementor-social-icon i{\n              color:var(--e-social-icon-icon-color)}\n            .elementor-social-icon svg{\n              fill:var(--e-social-icon-icon-color)}\n            .elementor-social-icon:last-child{\n              margin:0}\n            .elementor-social-icon:hover{\n              opacity:.9;\n              color:#fff}\n            .elementor-social-icon-android{\n              background-color:#a4c639}\n            .elementor-social-icon-apple{\n              background-color:#999}\n            .elementor-social-icon-behance{\n              background-color:#1769ff}\n            .elementor-social-icon-bitbucket{\n              background-color:#205081}\n            .elementor-social-icon-codepen{\n              background-color:#000}\n            .elementor-social-icon-delicious{\n              background-color:#39f}\n            .elementor-social-icon-deviantart{\n              background-color:#05cc47}\n            .elementor-social-icon-digg{\n              background-color:#005be2}\n            .elementor-social-icon-dribbble{\n              background-color:#ea4c89}\n            .elementor-social-icon-elementor{\n              background-color:#d30c5c}\n            .elementor-social-icon-envelope{\n              background-color:#ea4335}\n            .elementor-social-icon-facebook,.elementor-social-icon-facebook-f{\n              background-color:#3b5998}\n            .elementor-social-icon-flickr{\n              background-color:#0063dc}\n            .elementor-social-icon-foursquare{\n              background-color:#2d5be3}\n            .elementor-social-icon-free-code-camp,.elementor-social-icon-freecodecamp{\n              background-color:#006400}\n            .elementor-social-icon-github{\n              background-color:#333}\n            .elementor-social-icon-gitlab{\n              background-color:#e24329}\n            .elementor-social-icon-globe{\n              background-color:#818a91}\n            .elementor-social-icon-google-plus,.elementor-social-icon-google-plus-g{\n              background-color:#dd4b39}\n            .elementor-social-icon-houzz{\n              background-color:#7ac142}\n            .elementor-social-icon-instagram{\n              background-color:#262626}\n            .elementor-social-icon-jsfiddle{\n              background-color:#487aa2}\n            .elementor-social-icon-link{\n              background-color:#818a91}\n            .elementor-social-icon-linkedin,.elementor-social-icon-linkedin-in{\n              background-color:#0077b5}\n            .elementor-social-icon-medium{\n              background-color:#00ab6b}\n            .elementor-social-icon-meetup{\n              background-color:#ec1c40}\n            .elementor-social-icon-mixcloud{\n              background-color:#273a4b}\n            .elementor-social-icon-odnoklassniki{\n              background-color:#f4731c}\n            .elementor-social-icon-pinterest{\n              background-color:#bd081c}\n            .elementor-social-icon-product-hunt{\n              background-color:#da552f}\n            .elementor-social-icon-reddit{\n              background-color:#ff4500}\n            .elementor-social-icon-rss{\n              background-color:#f26522}\n            .elementor-social-icon-shopping-cart{\n              background-color:#4caf50}\n            .elementor-social-icon-skype{\n              background-color:#00aff0}\n            .elementor-social-icon-slideshare{\n              background-color:#0077b5}\n            .elementor-social-icon-snapchat{\n              background-color:#fffc00}\n            .elementor-social-icon-soundcloud{\n              background-color:#f80}\n            .elementor-social-icon-spotify{\n              background-color:#2ebd59}\n            .elementor-social-icon-stack-overflow{\n              background-color:#fe7a15}\n            .elementor-social-icon-steam{\n              background-color:#00adee}\n            .elementor-social-icon-stumbleupon{\n              background-color:#eb4924}\n            .elementor-social-icon-telegram{\n              background-color:#2ca5e0}\n            .elementor-social-icon-thumb-tack{\n              background-color:#1aa1d8}\n            .elementor-social-icon-tripadvisor{\n              background-color:#589442}\n            .elementor-social-icon-tumblr{\n              background-color:#35465c}\n            .elementor-social-icon-twitch{\n              background-color:#6441a5}\n            .elementor-social-icon-twitter{\n              background-color:#1da1f2}\n            .elementor-social-icon-viber{\n              background-color:#665cac}\n            .elementor-social-icon-vimeo{\n              background-color:#1ab7ea}\n            .elementor-social-icon-vk{\n              background-color:#45668e}\n            .elementor-social-icon-weibo{\n              background-color:#dd2430}\n            .elementor-social-icon-weixin{\n              background-color:#31a918}\n            .elementor-social-icon-whatsapp{\n              background-color:#25d366}\n            .elementor-social-icon-wordpress{\n              background-color:#21759b}\n            .elementor-social-icon-xing{\n              background-color:#026466}\n            .elementor-social-icon-yelp{\n              background-color:#af0606}\n            .elementor-social-icon-youtube{\n              background-color:#cd201f}\n            .elementor-social-icon-500px{\n              background-color:#0099e5}\n            .elementor-shape-rounded .elementor-icon.elementor-social-icon{\n              border-radius:10%}\n            .elementor-shape-circle .elementor-icon.elementor-social-icon{\n              border-radius:50%}\n          ",
                      }}
                    />
                    <div className="elementor-grid">
                      <span className="elementor-grid-item">
                        {/* <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-pulse-grow elementor-repeater-item-4cb9e0e">
                          <span className="elementor-screen-only">Twitter</span>
                          <i className="fab fa-twitter"></i>
                        </a> */}
                        <a href="https://www.facebook.com/GiankyCoinOfficial">
                          <SocialIcon
                            network="facebook"
                            bgColor="black"
                            style={{ height: 40, width: 40 }}
                          />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        {/* <a className="elementor-icon elementor-social-icon elementor-social-icon-telegram elementor-animation-pulse-grow elementor-repeater-item-24500b6">
                          <span className="elementor-screen-only">
                            Telegram
                          </span>
                          <i className="fab fa-telegram"></i>
                        </a> */}
                        <a href="https://twitter.com/giankynft">
                          <SocialIcon
                            network="twitter"
                            bgColor="black"
                            style={{ height: 40, width: 40 }}
                          />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a href="https://discord.gg/CK53tNQTHX">
                          <SocialIcon
                            network="discord"
                            bgColor="black"
                            style={{ height: 40, width: 40 }}
                          />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a href="https://www.instagram.com/gianky_nft">
                          <SocialIcon
                            network="instagram"
                            bgColor="black"
                            style={{ height: 40, width: 40 }}
                          />
                        </a>
                      </span>

                      <span className="elementor-grid-item">
                        <a href="https://www.tiktok.com/@giankycoin">
                          <SocialIcon
                            network="tiktok"
                            bgColor="black"
                            style={{ height: 40, width: 40 }}
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column_ elementor-col-25 elementor-element_ elementor-element-911ef74_ con-btn_"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element_ elementor-element-6b99b87_ elementor-align-center_ elementor-hidden-tablet_ elementor-hidden-mobile_ elementor-widget_ elementor-widget-button_"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container_">
                    <div>
                      <button className="elementor-button_c">
                        <span className="elementor-button-content-wrapper_">
                          <span className="elementor-button-text_">
                            <ConnectWallet />
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-for-mobile">
        <Navbar />
      </div>
    </>
  );
};
