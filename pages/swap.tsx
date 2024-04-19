import Link from "next/link";

import React, { useState } from "react";

import { Header } from "../components/Header";

import Footer from "./Footer"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function MainSwap() {


  const [copiedText, setCopiedText] = useState('');
  const [showToast, setShowToast] = useState(false);
  function handleToastClose() {
    setShowToast(false);
  }
  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setShowToast(true);
  }
  return (
    <>
      <div className="mint">
        <Header />

        <center>
          <h1 className="swap-text">Swap</h1>
        </center>

        <center>
          {/* Gianky Coin Smart Contract */}
          <h3 className="swap-contract">GKY on Polygon mainnet :</h3>
        </center>



        <ToastContainer />
        <center onClick={() =>
          toast.success('successfully copied!')
        }>
          <h3 className="swap-contract" onClick={() =>
            handleCopy('0x370806781689E670f85311700445449aC7C3Ff7a')
          }>
            0x370806781689E670f85311700445449aC7C3Ff7a
          </h3>
        </center>
        <div className="swappage">

          <iframe
            width="400"
            height="650"
            frameBorder="0"
            id="swap_iframe"
            allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
            src="https://flooz.trade/embed/trade?swapDisabled=false&swapToTokenAddress=0xd1843CfcF1c3b144F623632815aB5FAb28013772&swapLockToToken=true&onRampDisabled=true&onRampAsDefault=false&onRampDefaultAmount=200&network=polygon&lightMode=false&primaryColor=%23f95a15&backgroundColor=transparent&roundedCorners=10&padding=20&refId=RVpxks"
          ></iframe>
          <center>
            <h1 className="swap-text" style={{ marginTop: "7rem" }}>Purchase</h1>
          </center>

          <iframe height={625} id="purchase_iframe" title="Transak On/Off Ramp Widget" src="https://global.transak.com?apiKey=69d69a4f-c43b-4077-a3b2-32f82c7a5a46" frameBorder="no" allowFullScreen style={{ display: 'block', width: '100%', maxHeight: '625px', maxWidth: '400px', margin: 'auto', marginTop: "2rem" }}>
          </iframe>

          <div className="_container">
            <div>
              <h3 className="ant-typography title">
                Partenered With
              </h3>
            </div>
            <div className="home-page__slider">
              <div className="swiper-container swiper-container-pointer-events swiper-container-free-mode slider-wrapper">
                <div>
                </div>
                <div>
                </div>
                <div className="swiper-wrapper style-EKXnb" id="swiper-wrapper-ab6f89c18109e8f6e">
                  {/* <div className="swiper-slide style-LsYYB" id="style-LsYYB">
                    <img src="https://nftify-platform.s3.ap-southeast-1.amazonaws.com/banner/62e0383cf57a595469bf8b57-1674935841748.png" />
                  </div>
                  <div className="swiper-slide style-JUIym" id="style-JUIym">
                    <img src="https://nftify-platform.s3.ap-southeast-1.amazonaws.com/banner/62e0383cf57a595469bf8b57-1678296133091.png" />
                  </div>
                  <div className="swiper-slide style-ElR5Z" id="style-ElR5Z">
                    <img src="https://nftify-platform.s3.ap-southeast-1.amazonaws.com/banner/62e0383cf57a595469bf8b57-1678293830376.png" />
                  </div> */}
                  <div className="swiper-slide style-232XY" id="style-232XY">
                    <img src="https://nftify-platform.s3.ap-southeast-1.amazonaws.com/banner/62e0383cf57a595469bf8b57-1674935504359.png" />
                  </div>
                  <div className="swiper-slide style-B7a3E" id="style-B7a3E">
                    <img src="https://nftify-platform.s3.ap-southeast-1.amazonaws.com/banner/62e0383cf57a595469bf8b57-1674935463368.png" />
                  </div>
                </div>
                <span>
                </span>
              </div>
              <div className="swiper-button-prev swiper-button-disabled">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQxIDcuNDFMMTQgNkw4IDEyTDE0IDE4TDE1LjQxIDE2LjU5TDEwLjgzIDEyTDE1LjQxIDcuNDFaIiBmaWxsPSIjMzIzMjMyIi8+Cjwvc3ZnPgo=" />
              </div>
              {/* <div className="swiper-button-next swiper-button-disabled">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk5ODQgNkw4LjU4OTg0IDcuNDFMMTMuMTY5OCAxMkw4LjU4OTg0IDE2LjU5TDkuOTk5ODQgMThMMTUuOTk5OCAxMkw5Ljk5OTg0IDZaIiBmaWxsPSIjMzIzMjMyIi8+Cjwvc3ZnPgo=" />
              </div> */}
            </div>
          </div>

          <div className="Swapfooter">
            {/* <Footer /> */}
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
function useWeb3React<T>(): { library: any; chainId: any } {
  throw new Error("Function not implemented.");
}
