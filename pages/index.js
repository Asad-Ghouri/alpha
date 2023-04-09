import ezgifcom from "../public/assert/ezgif.com-video-to-gif.gif";
import two from "../public/assert/2.gif";
import three from "../public/assert/3.gif";
import four from "../public/assert/4.gif";
import five from "../public/assert/5.gif";
import six from "../public/assert/6.gif";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SetStateAction, useState } from "react";
import { ethers } from "ethers";
import Model from "../components/Model";

import {
  useContract,
  useContractWrite,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";

function Mint() {
  const [ListingValue, setListingValue] = useState("200");
  const [selectedOption, setSelectedOption] = useState("option1");

  const [showModal, setShowModal] = useState(false);

  const person = {
    name: "Alpha",
    age: "Owner and Founder",
    occupation:
      "I'm Enrico, also known as Alpha, founder and CEO of Gianky Coin, a technological startup aiming to create innovative products for the financial, blockchain and internet service provision sectors in general. I have a long standing experience in computing and a master's degree in business management, so I have done several projects in the field of internet service provision and traditional business consultancy. I started my business with Gianky Coin to provide innovative technological solutions that can contribute to the growth of the financial sector, knowledge of blockchain and DeFi (decentralized finance). We have developed an easy-to-use and accessible NFT platform, but also a BSC (binance smart chain) token that I hope will become a beneficial payment and investment tool for our supporters (holders), In addition, we are working on other blockchain-based products to help people understand, invest and benefit from the rapidly evolving technological environment. With the help of our team of experts, we have created a product that is both simple to use for those without experience in this sector and powerful for the experienced users. Our goal is to provide a superior quality service that allows everyone to use DeFi safely and conveniently. We hope that our platform will contribute to the spread of the blockchain & DeFi-based financial culture and to the growth of the global economy.",
  };

  const person1 = {
    name: "ONJI",
    age: "Chief Technical Officer",
    occupation:
      "With over 100 successful crypto token creations under his belt, he has a deep understanding of the technical and practical aspects of blockchain and its related applications. One of our most experienced and knowledgeable team members, he specializes in smart contracts, a key technology that underpins blockchain and enables the creation of decentralized applications. His expertise in smart contracts has helped many clients build robust and secure systems on top of blockchain, and he is always pushing the boundaries of what’s possible in this exciting and rapidly-evolving field. With a keen eye for detail and a passion for innovation, our blockchain and cryptocurrency expert is the go-to resource for anyone looking to explore the potential of blockchain and digital currencies. Whether you’re a seasoned investor, a startup looking to launch a new crypto token, or just curious about the technology behind this rapidly-growing industry, he’s the person you want on your side.",
  };

  const person2 = {
    name: "VINCENZO",
    age: "Senior Ambassador",
    occupation:
      "He has led the direction and management of computer and physics laboratories. He has developed specific skills as a team principal in managing teams in motorsports competitions, formula kart, formula azzurra, and formula three, where he has achieved various successes in the Italian championships. He has also directed the organization of events in various sailing and chess clubs.",
  };

  const person3 = {
    name: "Sirtre",
    age: "General Manager",
    occupation:
      "He started his career as a financial consultant at a prestigious bank, where he developed his skills in finance, risk management, and financial planning. After a few years, he took on the role of finance director and risk manager for a publicly listed company. Later, he held high-level positions in various investment firms and financial institutions. Currently, he is the general manager of a large software development company, where he is responsible for all aspects of financial management, from planning to risk management, and he is also the owner of high-profile hotel properties. Sirtre is actively involved in the community, attending numerous charity events and providing consulting to various non-profit organizations.",
  };

  const person4 = {
    name: "MASSIMO",
    age: "Team Leader",
    occupation:
      "He has served as a consultant for companies of all sizes, both in the software and hardware domains. Massimo is able to quickly identify the customer’s needs and provide swift and effective solutions. He has a great passion for technology and a solid knowledge of his area of expertise. Massimo is a dedicated team leader who is constantly committed to the goal of bringing his team to success. He loves to share his knowledge with team members and encourages their professional growth. Massimo has a strong strategic vision and a deep understanding of business issues. He is an excellent communicator and a natural motivator.",
  };

  const person5 = {
    name: "Eugenio",
    age: "International Ambassador",
    occupation:
      "He has obtained a license to conduct competitions in karting, track racing, Formula Azzurra, and Formula Three. He has participated in national and international championships, winning at regional and national levels. Sirtre is an experienced financial sector general manager with over 25 years of experience. He holds a degree in Business Economics and has a master’s degree in Finance. He started his career as a financial consultant at a prestigious bank, where he developed his skills in finance, risk management, and financial planning. After a few years, he took on the role of finance director and risk manager for a publicly listed company. Later, he held high-level positions in various investment firms and financial institutions. Currently, he is the general manager of a large software development company, where he is responsible for all aspects of financial management, from planning to risk management, and he is also the owner of high-profile hotel properties. Sirtre is actively involved in the community, attending numerous charity events and providing consulting to various non-profit organizations. Giancarlo Marketing Director Giancarlo is a seasoned professional in marketing and communication. He has spent many years in the financial technology sector, working with leading global companies.",
  };

  const person6 = {
    name: "Giancarlo",
    age: "Marketing Director",
    occupation:
      "He has always had a passion for technology and innovation, and this led him to join the Giankycoin project as the Marketing Director. With his extensive knowledge of the financial sector and innovative technologies, Giancarlo is able to develop and implement effective marketing strategies to promote Giankycoin globally. His goal is to make cryptocurrency known to an increasingly wider audience and make the world of cryptocurrencies accessible to everyone. Giancarlo is known for his communication and leadership skills, and these qualities allow him to work closely with the Giankycoin team to achieve the project’s long-term goals. Thanks to his experience and abilities, Giancarlo is a valuable asset to the Giankycoin team and a strong representative of the cryptocurrency to the public and stakeholders. We are confident that his contribution will be key to the success of Giankycoin.",
  };

  const handleClose = () => {
    setShowModal(false);
    setReadmore(false);
    setReadmore1(false);
    setReadmore2(false);
    setReadmore3(false);
    setReadmore4(false);
    setReadmore5(false);
    setReadmore6(false);
    setReadmore7(false);
  };

  const [readmore, setReadmore] = useState(false);
  const [readmore1, setReadmore1] = useState(false);
  const [readmore2, setReadmore2] = useState(false);
  const [readmore3, setReadmore3] = useState(false);
  const [readmore4, setReadmore4] = useState(false);
  const [readmore5, setReadmore5] = useState(false);
  const [readmore6, setReadmore6] = useState(false);
  const [readmore7, setReadmore7] = useState(false);

  console.log("read more is " + readmore);

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  const { contract } = useContract(
    "0x5c178b13293411634911ea292a1cdf931629fae7"
  );
  const { mutateAsync: mintStarter_without_id, isLoading } = useContractWrite(
    contract,
    "mintStarter_without_id"
  );

  const call = async () => {
    try {
      const data = await mintStarter_without_id();
      console.info("contract call successs", data);
      alert("successful data is " + data);
    } catch (err) {
      console.error("contract call failure", err);
      alert("erroe is" + err);
    }
  };

  const address = useAddress();

  return (
    <>
      <div className="mint">
        <Header />
        <div className="banner">
          <section
            className="elementor-section elementor-element elementor-element-56830d7 elementor-section-boxed elementor-section-items-middle"
            data-element_type="section"
          >
            <div
              className="elementor-shape elementor-shape-bottom"
              data-negative="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  d="M0,6V0h1000v100L0,6z"
                ></path>
              </svg>
            </div>
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-columnmm  elementor-col-100 elementor-element elementor-element-59cb1d2"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section
                    className="elementor-section elementor-element elementor-element-01caaad elementor-section-boxed"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-50 elementor-element elementor-element-fd20222"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-7558103 elementor-hidden-mobile elementor-widget"
                            data-element_type="widget"
                          >
                            <div className="elementor-widget-container">
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                      /*! elementor - v3.11.5 - 14-03-2023 */\n                      .elementor-column .elementor-spacer-inner{\n                        height:var(--spacer-size)}\n                      .e-con{\n                        --container-widget-width:100%}\n                      .e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{\n                        width:var(--container-widget-width,var(--spacer-size));\n                        --align-self:var(--container-widget-align-self,initial);\n                        --flex-shrink:0}\n                      .e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{\n                        height:100%}\n                      .e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{\n                        height:var(--container-widget-height,var(--spacer-size))}\n                    ",
                                }}
                              />
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner"></div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-29cb537 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                          >
                            <div className="elementor-widget-container">
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                      /*! elementor - v3.11.5 - 14-03-2023 */\n                      .elementor-heading-title{\n                        padding:0;\n                        margin:0;\n                        line-height:1}\n                      .elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{\n                        color:inherit;\n                        font-size:inherit;\n                        line-height:inherit}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-small{\n                        font-size:15px}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-medium{\n                        font-size:19px}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-large{\n                        font-size:29px}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-xl{\n                        font-size:39px}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-xxl{\n                        font-size:59px}\n                    ",
                                }}
                              />
                              <h1 className="elementor-heading-title elementor-size-xxl">
                                Mint Gianky
                              </h1>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-8eea6b0 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                          >
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title">
                                Collect this super rare NFT &amp; Digital
                                Artwork
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-element elementor-element-ef4f1bd"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-56ff30a elementor-widget elementor-widget-image"
                            data-element_type="widget"
                          >
                            <div className="elementor-widget-container">
                              <img
                                width={300}
                                height={242}
                                src="https://pngimg.com/d/piggy_bank_PNG109.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mint-text">
          <h2>Gianky NFTs</h2>
        </div>

        <div className="App">
          <div
            className="flex-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "5%",
              paddingLeft: "5%",
            }}
          >
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <Image
                  src={ezgifcom}
                  alt="GIF 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  STARTER
                  <br />
                  (0.065 BNB)
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexd"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <Image
                  src={two}
                  alt="GIF 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="giftext">
                  Basic
                  <br />
                  (0.18 BNB)
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexd"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <Image
                  src={five}
                  alt="GIF 3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  STANDARD
                  <br />
                  (0.33 BNB)
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div
            className="flex-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "5%",
              paddingLeft: "5%",
            }}
          >
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexc"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <Image
                  src={four}
                  alt="GIF 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  VIP
                  <br />
                  (1.60 BNB)
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexc"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <Image
                  src={three}
                  alt="GIF 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  Premium
                  <br />
                  (3.20 BNB)
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexc"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <Image
                  src={six}
                  alt="GIF 3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  DIAMOND
                  <br />
                  (16.00 BNB)
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="readmore">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d8fb732 elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-xl">
                  Our Team
                </h1>
              </div>
            </div>
            <div className="elementor-element elementor-element-0d4f662 elementor-widget-divider--separator-type-pattern elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
              <div className="elementor-widget-container">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n        /*! elementor - v3.11.5 - 14-03-2023 */\n        .elementor-widget-divider{\n          --divider-border-style:none;\n          --divider-border-width:1px;\n          --divider-color:#2c2c2c;\n          --divider-icon-size:20px;\n          --divider-element-spacing:10px;\n          --divider-pattern-height:24px;\n          --divider-pattern-size:20px;\n          --divider-pattern-url:none;\n          --divider-pattern-repeat:repeat-x}\n        .elementor-widget-divider .elementor-divider{\n          display:flex}\n        .elementor-widget-divider .elementor-divider__text{\n          font-size:15px;\n          line-height:1;\n          max-width:95%}\n        .elementor-widget-divider .elementor-divider__element{\n          margin:0 var(--divider-element-spacing);\n          flex-shrink:0}\n        .elementor-widget-divider .elementor-icon{\n          font-size:var(--divider-icon-size)}\n        .elementor-widget-divider .elementor-divider-separator{\n          display:flex;\n          margin:0;\n          direction:ltr}\n        .elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{\n          align-items:center}\n        .elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{\n          display:block;\n          content:"";\n          border-bottom:0;\n          flex-grow:1;\n          border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}\n        .elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{\n          flex-grow:0;\n          flex-shrink:100}\n        .elementor-widget-divider--element-align-left .elementor-divider-separator:before{\n          content:none}\n        .elementor-widget-divider--element-align-left .elementor-divider__element{\n          margin-left:0}\n        .elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{\n          flex-grow:0;\n          flex-shrink:100}\n        .elementor-widget-divider--element-align-right .elementor-divider-separator:after{\n          content:none}\n        .elementor-widget-divider--element-align-right .elementor-divider__element{\n          margin-right:0}\n        .elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{\n          border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}\n        .elementor-widget-divider--separator-type-pattern{\n          --divider-border-style:none}\n        .elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{\n          width:100%;\n          min-height:var(--divider-pattern-height);\n          -webkit-mask-size:var(--divider-pattern-size) 100%;\n          mask-size:var(--divider-pattern-size) 100%;\n          -webkit-mask-repeat:var(--divider-pattern-repeat);\n          mask-repeat:var(--divider-pattern-repeat);\n          background-color:var(--divider-color);\n          -webkit-mask-image:var(--divider-pattern-url);\n          mask-image:var(--divider-pattern-url)}\n        .elementor-widget-divider--no-spacing{\n          --divider-pattern-size:auto}\n        .elementor-widget-divider--bg-round{\n          --divider-pattern-repeat:round}\n        .rtl .elementor-widget-divider .elementor-divider__text{\n          direction:rtl}\n        .e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{\n          width:var(--container-widget-width,100%);\n          --flex-grow:var(--container-widget-flex-grow)}\n      ',
                  }}
                />
                <div className="elementor-divider style-mSM1f" id="style-mSM1f">
                  <span className="elementor-divider-separator"></span>
                </div>
              </div>
            </div>
            <section className="elementor-section elementor-element elementor-element-b43337a elementor-section-boxed">
              <div className="elementor-container elementor-column-gap-custom">
                <div className="elementor-column elementor-col-25 elementor-element elementor-element-4c44812">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e9f5ee7 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/fotor_2023-3-27_3_40_26.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-bc11f43 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">Alpha</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-24cf90e elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          Owner &amp; Founder
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d6b5de9 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                /*! elementor - v3.11.5 - 14-03-2023 */\n                .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{\n                  background-color:#818a91;\n                  color:#fff}\n                .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{\n                  color:#818a91;\n                  border:3px solid;\n                  background-color:transparent}\n                .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{\n                  margin-top:8px}\n                .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{\n                  width:1em;\n                  height:1em}\n                .elementor-widget-text-editor .elementor-drop-cap{\n                  float:left;\n                  text-align:center;\n                  line-height:1;\n                  font-size:50px}\n                .elementor-widget-text-editor .elementor-drop-cap-letter{\n                  display:inline-block}\n              ",
                          }}
                        />
                        <p className="para para1">
                          I'm Enrico, also known as Alpha, founder and CEO of
                          Gianky Coin, a technological startup aiming to create
                          innovative products for the financial, blockchain and
                          internet service provision sectors in general
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8192d16 elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                /*! elementor - v3.11.5 - 14-03-2023 */\n                .elementor-toggle{\n                  text-align:left}\n                .elementor-toggle .elementor-tab-title{\n                  font-weight:700;\n                  line-height:1;\n                  margin:0;\n                  padding:15px;\n                  border-bottom:1px solid #d4d4d4;\n                  cursor:pointer;\n                  outline:none}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon{\n                  display:inline-block;\n                  width:1em}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon svg{\n                  -webkit-margin-start:-5px;\n                  margin-inline-start:-5px;\n                  width:1em;\n                  height:1em}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-right{\n                  float:right;\n                  text-align:right}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-left{\n                  float:left;\n                  text-align:left}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-closed{\n                  display:block}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-opened{\n                  display:none}\n                .elementor-toggle .elementor-tab-title.elementor-active{\n                  border-bottom:none}\n                .elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-closed{\n                  display:none}\n                .elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-opened{\n                  display:block}\n                .elementor-toggle .elementor-tab-content{\n                  padding:15px;\n                  border-bottom:1px solid #d4d4d4;\n                  display:none}\n                @media (max-width:767px){\n                  .elementor-toggle .elementor-tab-title{\n                    padding:12px}\n                  .elementor-toggle .elementor-tab-content{\n                    padding:12px 10px}\n                }\n                .e-con-inner>.elementor-widget-toggle,.e-con>.elementor-widget-toggle{\n                  width:var(--container-widget-width);\n                  --flex-grow:var(--container-widget-flex-grow)}\n              ",
                          }}
                        />
                        <div className="elementor-toggle elementor-toggle1">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => setShowModal(true)}
                              >
                                Read more
                              </button>
                              <Model
                                show={showModal}
                                handleClose={handleClose}
                                person={person}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-element elementor-element-d969f74">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-29324f1 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/fotor_2023-3-29_19_23_31.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8631a6e elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">ONJI</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6652259 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          Chief Technical Officer
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7e3c9f3 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <p className="para">
                          Onji is our expert in blockchain and cryptocurrency,
                          who has helped clients from all over the world
                          navigate the complex world of digital currencies.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-a69db37 elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title mt-2"
                                onClick={() => {
                                  setReadmore6(true);
                                }}
                              >
                                Read more
                              </button>
                              <Model
                                show={readmore6}
                                handleClose={handleClose}
                                person={person1}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-element elementor-element-33954be">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-9b96701 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/fotor_2023-3-27_3_39_25.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-01f9fb5 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">VINCENZO</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7328efd elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          Senior Ambassador
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-443e706 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <p className="para para3">
                          Vincenzo Palmeri, who holds degrees in mathematics
                          with qualifications in mathematics and CS,
                          {/* <span id="style-of7yo" className="style-of7yo"> */}
                          mathematics and physics, has taught in high schools as
                          Vice Principal responsible for managing the teaching
                          staff.
                          {/* </span> */}
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-45d0bc6 elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-toggle3">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore5(true);
                                }}
                              >
                                Read more
                              </button>
                              <Model
                                show={readmore5}
                                handleClose={handleClose}
                                person={person2}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-element elementor-element-85187f3">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-9746d08 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/WhatsApp_Image_2023-03-29_at_7.52.46_PM-removebg-preview.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-1c16341 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">Sirtre</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6b393bc elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          General Manager
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ea378f3 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <p className="para para4">
                          Sirtre is an experienced financial sector general
                          manager with over 25 years of experience. He holds a
                          degree in Business Economics and has a master’s degree
                          in Finance.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7b8c75f elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-toggle4">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore4(true);
                                }}
                              >
                                Read more
                              </button>
                              <Model
                                show={readmore4}
                                handleClose={handleClose}
                                person={person3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-element elementor-element-8654344 elementor-section-boxed st-s">
              <div className="elementor-container elementor-column-gap-custom">
                <div className="elementor-column elementor-col-33 elementor-element elementor-element-5eb5c1c">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-edac993 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/fotor_2023-3-27_9_37_20.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-b761440 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">MASSIMO</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-1106f69 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">Team Leader</h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d11496e elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <p className="para para5">
                          Massimo is an experienced team leader with a wealth of
                          experience in the field of information management
                          technologies.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-dae6723 elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-toggle5">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore2(true);
                                }}
                              >
                                Read more
                              </button>
                            </div>
                            <Model
                              show={readmore2}
                              handleClose={handleClose}
                              person={person4}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-33 elementor-element elementor-element-9cd59d3">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b3ee127 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/fotor_2023-3-29_19_25_40.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7b8be8a elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">Eugenio</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-0b7d8b8 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          International Ambassador
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-2684daa elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <p className="para para6">
                          Eugenio Palmeri, a Mechanical Engineering graduate,
                          works in a Swiss company that specializes in machine
                          inspections and checks of mechanical components.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d183bff elementor-widget elementor-widget-toggle mt-2">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore1(true);
                                }}
                              >
                                Read More
                              </button>
                              <Model
                                show={readmore1}
                                handleClose={handleClose}
                                person={person5}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-33 elementor-element elementor-element-d37cfeb">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-385589f elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/fotor_2023-3-27_3_40_3.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-02241fd elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">Giancarlo</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-3dfd6a0 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          Marketing Director
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-564374d elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <p className="para para7">
                          Giancarlo is a seasoned professional in marketing and
                          communication. He has spent many years in the
                          financial technology sector, working with leading
                          global companies.
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-827dbfd elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-toggle7">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore(true);
                                }}
                              >
                                Read more
                              </button>

                              <Model
                                show={readmore}
                                handleClose={handleClose}
                                person={person6}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div>
          <div
            className={
              selectedOption === "option1"
                ? "footerss indexfooter"
                : "footerssb"
            }
          >
            <Footer />
          </div>
        </div>
      </div>

      {/* <div className={selectedOption === "option1" ? "footer" : "footerb"}>
        <Footer />
      </div> */}
    </>
  );
}

export default Mint;
