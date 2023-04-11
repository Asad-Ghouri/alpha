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
          <h3 className="swap-contract">Gianky Coin Smart Contract :</h3>
        </center>



        <ToastContainer />
        <center onClick={() =>
          toast.success('successfully copied!')
        }>
          <h3 className="swap-contract" onClick={() =>
            handleCopy('0x834619439294Beb318e1b73Be3D20d2b581D4bFb')
          }>
            0x834619439294Beb318e1b73Be3D20d2b581D4bFb
          </h3>
        </center>
        <div className="swappage">
          <iframe
            width="400"
            height="650"
            frameBorder="0"
            id="swap_iframe"
            allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
            src="https://flooz.trade/embed/trade?swapDisabled=false&swapToTokenAddress=0x834619439294Beb318e1b73Be3D20d2b581D4bFb&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=200&onRampTokenAddress=0x834619439294Beb318e1b73Be3D20d2b581D4bFb&network=bsc&lightMode=false&primaryColor=%23ff6600&roundedCorners=10&padding=20&refId=PjKSWG"
          ></iframe>
          <center>
            <h1 className="swap-text" style={{ marginTop: "7rem" }}>Purchase</h1>
          </center>
          <iframe height={625} title="Transak On/Off Ramp Widget" src="https://global.transak.com?apiKey=69d69a4f-c43b-4077-a3b2-32f82c7a5a46" frameBorder="no" allowFullScreen style={{ display: 'block', width: '100%', maxHeight: '625px', maxWidth: '400px', margin: 'auto', marginTop: "2rem" }}>
          </iframe>
          <div className="Swapfooter">
            <Footer />
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
