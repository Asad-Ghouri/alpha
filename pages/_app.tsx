import React, { useState } from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Header } from "../components/Header"
// import { Footer } from "./Footer"
import { ethers } from "ethers";


// This is the chainId your dApp will work on.
// const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {

  const [changeLan, setchangeLan] = useState(true);

  return (
    
    // <ThirdwebProvider activeChain="polygon">
    <ThirdwebProvider >
    <ThirdwebSDKProvider
    activeChain={"polygon"}
    // Example: Use ethers to get the signer from the window.ethereum object
    signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}
    clientId="c63fd3dcf8c9eec46c253e543b0ff569"
  >
      <div className="setchangeLang">
        {changeLan ? (
          <button
            className="changelang"
            onClick={() => {
              setchangeLan(false);
            }}
          >
            English
          </button>
        ) : (
          <button
            className="changelang"
            onClick={() => {
              setchangeLan(true);
            }}
          >
            Italiano
          </button>
        )}
      </div>
      <Component {...pageProps} changeLan={changeLan} />
      {/* <Footer /> */}
      </ThirdwebSDKProvider>
      </ThirdwebProvider>


  );
}

export default MyApp;
