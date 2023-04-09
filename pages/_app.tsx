import React, { useState } from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"



// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {

  const [changeLan, setchangeLan] = useState(true);

  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
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
            Italian
          </button>
        )}
      </div>
      <Component {...pageProps} changeLan={changeLan} />
      {/* <Footer /> */}
    </ThirdwebProvider>
  );
}

export default MyApp;
