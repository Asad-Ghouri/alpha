import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "./styles/globals.css";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"



// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ThirdwebProvider>
  );
}

export default MyApp;
