import React, { Component, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
export default function App() {
  const [token, setToken] = useState();
  const [toAdd, setToAdd] = useState();
  const [Amount, setAmount] = useState();

  const { contract } = useContract(
    "0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
  );
  const { mutateAsync: mintToalpha, isLoading } = useContractWrite(
    contract,
    "mintToalpha"
  );

  const call = async () => {
    const tokenType = 1;
    const to = "0x1234567890123456789012345678901234567890";
    const amount = 100;
    try {
      const data = await mintToalpha(tokenType, to, amount);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="form">
      <Header />
      <form className="nform">
        {/* <h1>Sign Up</h1> */}
        <fieldset>
          <legend>
            <span className="number">1</span>Mint Only For Alpha
          </legend>
          <label className="label" htmlFor="name">
            TokenType:
          </label>
          <input
            className="input"
            onClick={(e) => {
              setToken(e.target.value);
            }}
            type="text"
            id="name"
            name="user_name"
          />
          <label className="label" htmlFor="mail">
            To Address:
          </label>
          <input
            className="input"
            type="text"
            onClick={(e) => {
              setToAdd(e.target.value);
            }}
            id="mail"
            name="user_email"
          />
          <label className="label" htmlFor="password">
            Amount:
          </label>
          <input
            className="input"
            onClick={(e) => {
              setAmount(e.target.value);
            }}
            type="text"
            id="password"
            name="user_password"
          />
        </fieldset>

        {/* <button type="submit" >Mint</button> */}
      </form>
      <Web3Button
        // className="signupbtn"
        contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
        action={() => {
          call();
        }}
      >
        Mint
      </Web3Button>
      <div className="footerss alphafooter">
        <Footer />
      </div>
    </div>
  );
}
