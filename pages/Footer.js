import React, { useState } from "react";
import Link from "next/link";
import info from "../public/info-removebg-preview.png";
import Image from "next/image";
import Model from "../components/Model";
import { SocialIcon } from "react-social-icons";

import axios from "axios";
import { toast } from "react-toastify";

export default function Footer(props) {
  const [showModal, setShowModal] = useState(false);

  console.log("change in footer " + props.changeLan);

  const person = {
    name: "",
    age: "",
    occupation:
      "Gianky Coin is a product created, managed, controlled and exclusively owned by the company Il Dattero based in Catania, Via Ferrante Aporti, 8 CAP 95123 Italy. P.I / VAT IT05632770870; REA: CT-418000; tel.+39 095 8998538 website: www.ildattero.cloud",
  };

  const person_i = {
    name: "",
    age: "",
    occupation:
      "Gianky Coin è un prodotto creato , gestito , controllato e di esclusiva proprietà” dell’azienda “ Il dattero” con sede in Catania in Via Ferrante Aporti, 8 CAP 95123 Italy . P.I 05632770870 ; REA : CT-418000 : tel.+39 095 8998538 website : www.ildattero.cloud",
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const [email, setEmail] = useState("");

  const sendNotification = async (email) => {
    const PUSHOVER_API_URL = "https://api.pushover.net/1/messages.json";
    const USER_KEY = "uac6bbonzzqg995tdvjyd83atpjdhb";
    const API_TOKEN = "aofwbemt38cat6wjcfh7gu7vne5oac";
    try {
      const response = await axios.post(PUSHOVER_API_URL, {
        token: API_TOKEN,
        user: USER_KEY,
        message: `New email submitted: ${email}`,
      });
      if (response.status === 200) {
        alert(`Notification sent for ${email}`);
      } else {
        alert("Failed to send notification");
      }
    } catch (error) {
      alert("Failed to send notification");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      sendNotification(email);
      setEmail("");
    } else {
      alert("Please enter an email");
    }
  };

  return (
    <div className="footer">
      <section
        className="elementor-section elementor-element elementor-element-2398792f elementor-section-boxed elementor-section-items-middle"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-33 elementor-element elementor-element-ff03f15"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-6392d7d elementor-widget elementor-widget-image"
                data-element_type="widget"
              >
                <div className="elementor-widget-container foter-img-logo">
                  <img
                    width={40}
                    height={40}
                    src="https://itishstudios.net/assert/78b4ba1d-c647-4d6f-aab6-a2eff6d6957e-removebg-preview-e1680104061890.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-element elementor-element-1c5902d9"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-1959444 elementor-nav-menu__align-center elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
                data-element_type="widget"
              >
                <div className="elementor-widget-container">
                  <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline">
                    <ul className="elementor-nav-menu">
                      <li>
                        <Link href="/" className="elementor-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/mint" className="elementor-item">
                          Mint
                        </Link>
                      </li>
                      <li>
                        <Link href="/swap" className="elementor-item">
                          Swap
                        </Link>
                      </li>
                      <li>
                        <Link href="/TermAndCondition" className="elementor-item">
                          Term & Condition
                        </Link>
                      </li>
                      <li>
                        <Link href="/PrivacyPolicy" className="elementor-item">
                        Privacy Policy
                        </Link>
                      </li>
                      
                      <li>
                        <a
                          href="https://itishstudios.net/assert/GIANKYNFTSWhitePaper.pdf"
                          className="elementor-item"
                          download
                        >
                          Whitepaper English
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://itishstudios.net/assert/Italic.pdf"
                          className="elementor-item"
                          download
                        >
                          Whitepaper Italiano
                        </a>
                      </li>
                      {/* <li>
                        <Link href="/swap" className="elementor-item">
                          Swap
                        </Link>
                      </li>
                      <li>
                        <Link href="/whitePaper" className="elementor-item">
                          WhitePaper
                        </Link>
                      </li> */}
                    </ul>
                  </nav>

                  <div className="elementor-grid elementor-flex ssicon">
                    <span className="elementor-grid-item elementor-flex-item">
                      {/* <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-pulse-grow elementor-repeater-item-4cb9e0e">
                          <span className="elementor-screen-only">Twitter</span>
                          <i className="fab fa-twitter"></i>
                        </a> */}
                      <a href="https://www.facebook.com/GiankyCoinOfficial">
                        <SocialIcon
                          network="facebook"
                          bgColor="white"
                          style={{ height: 40, width: 40 }}
                        />
                      </a>
                    </span>
                    <span className="elementor-grid-item elementor-flex-item">
                      {/* <a className="elementor-icon elementor-social-icon elementor-social-icon-telegram elementor-animation-pulse-grow elementor-repeater-item-24500b6">
                          <span className="elementor-screen-only">
                            Telegram
                          </span>
                          <i className="fab fa-telegram"></i>
                        </a> */}
                      <a href="https://t.me/giankycoin2">
                        <SocialIcon
                          network="telegram"
                          bgColor="white"
                          style={{ height: 40, width: 40 }}
                        />
                      </a>
                    </span>
                    <span className="elementor-grid-item elementor-flex-item">
                      <a href="https://discord.gg/CK53tNQTHX">
                        <SocialIcon
                          network="discord"
                          bgColor="white"
                          style={{ height: 40, width: 40 }}
                        />
                      </a>
                    </span>
                  </div>

                  <nav
                    className="elementor-nav-menu--dropdown elementor-nav-menu__container style-4vgJU"
                    id="style-4vgJU"
                  >
                    <ul className="elementor-nav-menu">
                      <li>
                        <a href="#home" className="elementor-item">
                          HOME
                        </a>
                      </li>
                      <li>
                        <a href="#team" className="elementor-item">
                          TEAM
                        </a>
                      </li>
                      {/* <li>
                        <a href="#paper" className="elementor-item">
                          WHITEPAPER
                        </a>
                      </li> */}
                      <li>
                        <a href="#nft" className="elementor-item">
                          NFTs
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shopinose.com/swap/"
                          className="elementor-item"
                        >
                          Swap
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://itishstudios.net/assert/GIANKYNFTSWhitePaper.pdf"
                          className="elementor-item"
                          download
                        >
                          Whitepaper English
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://itishstudios.net/assert/Italic.pdf"
                          className="elementor-item"
                          download
                        >
                          Whitepaper Italic
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-element elementor-element-37cbe0e1"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-5ef69d42 elementor-widget elementor-widget-heading"
                data-element_type="widget"
              >
                <div className="elementor-widget-container">
                  {props.changeLan ? (
                    <h2 className="elementor-heading-title cw">
                      Subscribe To Us
                    </h2>
                  ) : (
                    <h2 className="elementor-heading-title cw">
                      Iscriviti a noi
                    </h2>
                  )}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-3b027810 elementor-widget elementor-widget-text-editor"
                data-element_type="widget"
              >
                <div className="elementor-widget-container">
                  {props.changeLan ? (
                    <p>Join Our Newsletter For Latest Updates !</p>
                  ) : (
                    <p>
                      Iscriviti alla nostra newsletter per gli ultimi
                      aggiornamenti!
                    </p>
                  )}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-7d0305a0 elementor-button-align-stretch elementor-widget elementor-widget-form"
                data-element_type="widget"
              >
                <div className="elementor-widget-container">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n              /*! elementor-pro - v3.11.7 - 22-03-2023 */\n              .elementor-button.elementor-hidden,.elementor-hidden{\n                display:none}\n              .e-form__step{\n                width:100%}\n              .e-form__step:not(.elementor-hidden){\n                display:flex;\n                flex-wrap:wrap}\n              .e-form__buttons{\n                flex-wrap:wrap}\n              .e-form__buttons,.e-form__buttons__wrapper{\n                display:flex}\n              .e-form__indicators{\n                display:flex;\n                justify-content:space-between;\n                align-items:center;\n                flex-wrap:nowrap;\n                font-size:13px;\n                margin-bottom:var(--e-form-steps-indicators-spacing)}\n              .e-form__indicators__indicator{\n                display:flex;\n                flex-direction:column;\n                align-items:center;\n                justify-content:center;\n                flex-basis:0;\n                padding:0 var(--e-form-steps-divider-gap)}\n              .e-form__indicators__indicator__progress{\n                width:100%;\n                position:relative;\n                background-color:var(--e-form-steps-indicator-progress-background-color);\n                border-radius:var(--e-form-steps-indicator-progress-border-radius);\n                overflow:hidden}\n              .e-form__indicators__indicator__progress__meter{\n                width:var(--e-form-steps-indicator-progress-meter-width,0);\n                height:var(--e-form-steps-indicator-progress-height);\n                line-height:var(--e-form-steps-indicator-progress-height);\n                padding-right:15px;\n                border-radius:var(--e-form-steps-indicator-progress-border-radius);\n                background-color:var(--e-form-steps-indicator-progress-color);\n                color:var(--e-form-steps-indicator-progress-meter-color);\n                text-align:right;\n                transition:width .1s linear}\n              .e-form__indicators__indicator:first-child{\n                padding-left:0}\n              .e-form__indicators__indicator:last-child{\n                padding-right:0}\n              .e-form__indicators__indicator--state-inactive{\n                color:var(--e-form-steps-indicator-inactive-primary-color,#c2cbd2)}\n              .e-form__indicators__indicator--state-inactive [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none){\n                background-color:var(--e-form-steps-indicator-inactive-secondary-color,#fff)}\n              .e-form__indicators__indicator--state-inactive object,.e-form__indicators__indicator--state-inactive svg{\n                fill:var(--e-form-steps-indicator-inactive-primary-color,#c2cbd2)}\n              .e-form__indicators__indicator--state-active{\n                color:var(--e-form-steps-indicator-active-primary-color,#39b54a);\n                border-color:var(--e-form-steps-indicator-active-secondary-color,#fff)}\n              .e-form__indicators__indicator--state-active [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none){\n                background-color:var(--e-form-steps-indicator-active-secondary-color,#fff)}\n              .e-form__indicators__indicator--state-active object,.e-form__indicators__indicator--state-active svg{\n                fill:var(--e-form-steps-indicator-active-primary-color,#39b54a)}\n              .e-form__indicators__indicator--state-completed{\n                color:var(--e-form-steps-indicator-completed-secondary-color,#fff)}\n              .e-form__indicators__indicator--state-completed [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none){\n                background-color:var(--e-form-steps-indicator-completed-primary-color,#39b54a)}\n              .e-form__indicators__indicator--state-completed .e-form__indicators__indicator__label{\n                color:var(--e-form-steps-indicator-completed-primary-color,#39b54a)}\n              .e-form__indicators__indicator--state-completed .e-form__indicators__indicator--shape-none{\n                color:var(--e-form-steps-indicator-completed-primary-color,#39b54a);\n                background-color:initial}\n              .e-form__indicators__indicator--state-completed object,.e-form__indicators__indicator--state-completed svg{\n                fill:var(--e-form-steps-indicator-completed-secondary-color,#fff)}\n              .e-form__indicators__indicator__icon{\n                width:var(--e-form-steps-indicator-padding,30px);\n                height:var(--e-form-steps-indicator-padding,30px);\n                font-size:var(--e-form-steps-indicator-icon-size);\n                border-width:1px;\n                border-style:solid;\n                display:flex;\n                justify-content:center;\n                align-items:center;\n                overflow:hidden;\n                margin-bottom:10px}\n              .e-form__indicators__indicator__icon img,.e-form__indicators__indicator__icon object,.e-form__indicators__indicator__icon svg{\n                width:var(--e-form-steps-indicator-icon-size);\n                height:auto}\n              .e-form__indicators__indicator__icon .e-font-icon-svg{\n                height:1em}\n              .e-form__indicators__indicator__number{\n                width:var(--e-form-steps-indicator-padding,30px);\n                height:var(--e-form-steps-indicator-padding,30px);\n                border-width:1px;\n                border-style:solid;\n                display:flex;\n                justify-content:center;\n                align-items:center;\n                margin-bottom:10px}\n              .e-form__indicators__indicator--shape-circle{\n                border-radius:50%}\n              .e-form__indicators__indicator--shape-square{\n                border-radius:0}\n              .e-form__indicators__indicator--shape-rounded{\n                border-radius:5px}\n              .e-form__indicators__indicator--shape-none{\n                border:0}\n              .e-form__indicators__indicator__label{\n                text-align:center}\n              .e-form__indicators__indicator__separator{\n                width:100%;\n                height:var(--e-form-steps-divider-width);\n                background-color:#c2cbd2}\n              .e-form__indicators--type-icon,.e-form__indicators--type-icon_text,.e-form__indicators--type-number,.e-form__indicators--type-number_text{\n                align-items:flex-start}\n              .e-form__indicators--type-icon .e-form__indicators__indicator__separator,.e-form__indicators--type-icon_text .e-form__indicators__indicator__separator,.e-form__indicators--type-number .e-form__indicators__indicator__separator,.e-form__indicators--type-number_text .e-form__indicators__indicator__separator{\n                margin-top:calc(var(--e-form-steps-indicator-padding, 30px) / 2 - var(--e-form-steps-divider-width, 1px) / 2)}\n              .elementor-field-type-hidden{\n                display:none}\n              .elementor-field-type-html{\n                display:inline-block}\n              .elementor-login .elementor-lost-password,.elementor-login .elementor-remember-me{\n                font-size:.85em}\n              .elementor-field-type-recaptcha_v3 .elementor-field-label{\n                display:none}\n              .elementor-field-type-recaptcha_v3 .grecaptcha-badge{\n                z-index:1}\n              .elementor-button .elementor-form-spinner{\n                order:3}\n              .elementor-form .elementor-button>span{\n                display:flex;\n                justify-content:center;\n                align-items:center}\n              .elementor-form .elementor-button .elementor-button-text{\n                white-space:normal;\n                flex-grow:0}\n              .elementor-form .elementor-button svg{\n                height:auto}\n              .elementor-form .elementor-button .e-font-icon-svg{\n                height:1em}\n              .elementor-select-wrapper .select-caret-down-wrapper{\n                position:absolute;\n                top:50%;\n                transform:translateY(-50%);\n                inset-inline-end:10px;\n                pointer-events:none;\n                font-size:11px}\n              .elementor-select-wrapper .select-caret-down-wrapper svg{\n                display:unset;\n                width:1em;\n                aspect-ratio:unset;\n                fill:currentColor}\n              .elementor-select-wrapper .select-caret-down-wrapper i{\n                font-size:19px;\n                line-height:2}\n              .elementor-select-wrapper.remove-before:before{\n                content:""!important}\n            ',
                    }}
                  />
                  <form
                    className="elementor-form"
                    action="https://formspree.io/f/mpzeoyoe"
                    method="POST"
                  >
                    {/* <input type="hidden" name="post_id" defaultValue={160} />
                    <input
                      type="hidden"
                      name="form_id"
                      defaultValue="7d0305a0"
                    /> */}
                    {/* <input type="hidden" name="referer_title" defaultValue />
                    <input type="hidden" name="queried_id" defaultValue={6} /> */}
                    <div className="elementor-form-fields-wrapper">
                      <div className="elementor-field-group elementor-column elementor-col-50">
                        <input
                          name="Email Address"
                          id="form-field-email"
                          className="elementor-field elementor-size-md  elementor-field-textual"
                          placeholder="Email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-33 e-form__buttons">
                        <button
                          type="submit"
                          className="elementor-button elementor-size-md elementor-animation-push"
                        >
                          <span>
                            <span className=" elementor-button-icon"></span>
                            <span className="elementor-button-text">
                              Subscribe
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <center className="cw copytext">
            {props.changeLan
              ? "Copyright @ 2023 Gianky Coin"
              : "Copyright @ 2023 Moneta Gianky"}
            {/* <Image
              className="info-img"
              src={info}
              width={40}
              height={40}
              alt=""
              onClick={() => setShowModal(true)}
            /> */}
          </center>
        </div>
        {props.changeLan ? (
          <Model show={showModal} handleClose={handleClose} person={person} />
        ) : (
          <Model show={showModal} handleClose={handleClose} person={person_i} />
        )}
      </section>
    </div>
  );
}
