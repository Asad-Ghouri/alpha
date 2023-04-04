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

import {
  useContract,
  useContractWrite,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";

function Mint() {
  const [ListingValue, setListingValue] = useState("200");
  const [selectedOption, setSelectedOption] = useState("option1");

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
                                Collect this super rear NFT &amp; Digital
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
                                src="https://shopinose.com/wp-content/uploads/2023/03/hand-putting-coin-pink-piggy-money-savings-concept-pink-background-3d-rendering-removebg-preview-e1680108538161-300x242.png"
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
          <h2>Mint Gianky</h2>
          <div className="container">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                With Raffle
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                WithOut Raffle
              </label>
            </div>
          </div>
        </div>

        <div>
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
                className={selectedOption === "option1" ? "flex" : "flex flexb"}
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
                    COMMUNITY
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setListingValue(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter listing price"
                      />
                    </form>
                    {/* <button
                      className={
                        selectedOption === "option1"
                          ? "mainButton spacerBottom} listbtn"
                          : "mainButton spacerBottom} listbtn ec"
                      }
                      onClick={() => call()}
                    >
                      Stake
                    </button> */}

                    <Web3Button
                      contractAddress="0x5c178b13293411634911ea292a1cdf931629fae7"
                      action={(contract) => {
                        contract.call("mintStarter_without_id");
                      }}
                      overrides={{
                        accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
                        blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
                        ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
                        customData: {}, // The transaction data.
                        from: address, // The address this transaction is from.
                        gasLimit: 700000, // The maximum amount of gas this transaction is permitted to use.
                        gasPrice: 700000, // The price (in wei) per unit of gas this transaction will pay.
                        maxFeePerGas: 700000, // The maximum price (in wei) per unit of gas this transaction will pay
                        maxPriorityFeePerGas: 1, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
                        nonce: 2, // The nonce used as part of the proof-of-work to mine this block.
                        type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
                        value: 0.5, // send 0.1 ether with the contract call
                      }}
                    >
                      Stake
                    </Web3Button>
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1" ? "flex" : "flex flexb flexd"
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
                    COMMUNITY
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setListingValue(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter listing price"
                      />
                    </form>
                    {/* <button
                      className={
                        selectedOption === "option1"
                          ? "mainButton spacerBottom} listbtn"
                          : "mainButton spacerBottom} listbtn ec"
                      }
                      onClick={() => console.log("hello")}
                    >
                      Stake
                    </button> */}
                    <Web3Button
                      contractAddress="0x5c178b13293411634911ea292a1cdf931629fae7"
                      action={(contract) => {
                        contract.call("mintStarter_without_id");
                      }}
                      overrides={{
                        accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
                        blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
                        ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
                        customData: {}, // The transaction data.
                        from: address, // The address this transaction is from.
                        gasLimit: 700000, // The maximum amount of gas this transaction is permitted to use.
                        gasPrice: 700000, // The price (in wei) per unit of gas this transaction will pay.
                        maxFeePerGas: 700000, // The maximum price (in wei) per unit of gas this transaction will pay
                        maxPriorityFeePerGas: 1, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
                        nonce: 2, // The nonce used as part of the proof-of-work to mine this block.
                        type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
                        value: 0.5, // send 0.1 ether with the contract call
                      }}
                    >
                      Stake
                    </Web3Button>
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1" ? "flex" : "flex flexb flexd"
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
                    COMMUNITY
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setListingValue(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter listing price"
                      />
                    </form>
                    {/* <button
                      className={
                        selectedOption === "option1"
                          ? "mainButton spacerBottom} listbtn"
                          : "mainButton spacerBottom} listbtn ec"
                      }
                      onClick={() => console.log("hello")}
                    >
                      Stake
                    </button> */}
                    <Web3Button
                      contractAddress="0x5c178b13293411634911ea292a1cdf931629fae7"
                      action={(contract) => {
                        contract.call("mintStarter_without_id");
                      }}
                      overrides={{
                        accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
                        blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
                        ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
                        customData: {}, // The transaction data.
                        from: address, // The address this transaction is from.
                        gasLimit: 700000, // The maximum amount of gas this transaction is permitted to use.
                        gasPrice: 700000, // The price (in wei) per unit of gas this transaction will pay.
                        maxFeePerGas: 700000, // The maximum price (in wei) per unit of gas this transaction will pay
                        maxPriorityFeePerGas: 1, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
                        nonce: 2, // The nonce used as part of the proof-of-work to mine this block.
                        type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
                        value: 0.5, // send 0.1 ether with the contract call
                      }}
                    >
                      Stake
                    </Web3Button>
                  </div>
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
                  selectedOption === "option1" ? "flex" : "flex flexb flexc"
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
                    COMMUNITY
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setListingValue(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter listing price"
                      />
                    </form>
                    {/* <button
                      className={
                        selectedOption === "option1"
                          ? "mainButton spacerBottom} listbtn"
                          : "mainButton spacerBottom} listbtn ec"
                      }
                      onClick={() => console.log("hello")}
                    >
                      Stake
                    </button> */}
                    <Web3Button
                      contractAddress="0x5c178b13293411634911ea292a1cdf931629fae7"
                      action={(contract) => {
                        contract.call("mintStarter_without_id");
                      }}
                      overrides={{
                        accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
                        blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
                        ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
                        customData: {}, // The transaction data.
                        from: address, // The address this transaction is from.
                        gasLimit: 700000, // The maximum amount of gas this transaction is permitted to use.
                        gasPrice: 700000, // The price (in wei) per unit of gas this transaction will pay.
                        maxFeePerGas: 700000, // The maximum price (in wei) per unit of gas this transaction will pay
                        maxPriorityFeePerGas: 1, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
                        nonce: 2, // The nonce used as part of the proof-of-work to mine this block.
                        type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
                        value: 0.5, // send 0.1 ether with the contract call
                      }}
                    >
                      Stake
                    </Web3Button>
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1" ? "flex" : "flex flexb flexc"
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
                    alt="GIF 2"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="giftext">
                    DIAMOND
                    <br />
                    COMMUNITY
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setListingValue(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter listing price"
                      />
                    </form>
                    {/* <button
                      className={
                        selectedOption === "option1"
                          ? "mainButton spacerBottom} listbtn"
                          : "mainButton spacerBottom} listbtn ec"
                      }
                      onClick={() => console.log("hello")}
                    >
                      Stake
                    </button> */}
                    <Web3Button
                      contractAddress="0x5c178b13293411634911ea292a1cdf931629fae7"
                      action={(contract) => {
                        contract.call("mintStarter_without_id");
                      }}
                      overrides={{
                        accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
                        blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
                        ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
                        customData: {}, // The transaction data.
                        from: address, // The address this transaction is from.
                        gasLimit: 700000, // The maximum amount of gas this transaction is permitted to use.
                        gasPrice: 700000, // The price (in wei) per unit of gas this transaction will pay.
                        maxFeePerGas: 700000, // The maximum price (in wei) per unit of gas this transaction will pay
                        maxPriorityFeePerGas: 1, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
                        nonce: 2, // The nonce used as part of the proof-of-work to mine this block.
                        type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
                        value: 0.5, // send 0.1 ether with the contract call
                      }}
                    >
                      Stake
                    </Web3Button>
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1" ? "flex" : "flex flexb flexc"
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
                    COMMUNITY
                  </div>

                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setListingValue(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter listing price"
                      />
                    </form>
                    {/* <button
                      className={
                        selectedOption === "option1"
                          ? "mainButton spacerBottom} listbtn"
                          : "mainButton spacerBottom} listbtn ec"
                      }
                      onClick={() => console.log("hello")}
                    >
                      Stake
                    </button> */}
                    <Web3Button
                      contractAddress="0x5c178b13293411634911ea292a1cdf931629fae7"
                      action={(contract) => {
                        contract.call("mintStarter_without_id");
                      }}
                      overrides={{
                        accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
                        blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
                        ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
                        customData: {}, // The transaction data.
                        from: address, // The address this transaction is from.
                        gasLimit: 700000, // The maximum amount of gas this transaction is permitted to use.
                        gasPrice: 700000, // The price (in wei) per unit of gas this transaction will pay.
                        maxFeePerGas: 700000, // The maximum price (in wei) per unit of gas this transaction will pay
                        maxPriorityFeePerGas: 1, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
                        nonce: 2, // The nonce used as part of the proof-of-work to mine this block.
                        type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
                        value: 0.5, // send 0.1 ether with the contract call
                      }}
                    >
                      Stake
                    </Web3Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={selectedOption === "option1" ? "footerss" : "footerssb"}
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
