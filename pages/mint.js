import ezgifcom from "../public/assert/ezgif.com-video-to-gif.gif";
import two from "../public/assert/2.gif";
import three from "../public/assert/3.gif";
import four from "../public/assert/4.gif";
import five from "../public/assert/5.gif";
import six from "../public/assert/6.gif";
import Image from "next/image";
import Footer from "./Footer";
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

  const [count, setcount] = useState(2);
  const [count1, setcount1] = useState(2);
  const [count2, setcount2] = useState(2);
  const [count3, setcount3] = useState(2);
  const [count4, setcount4] = useState(2);
  const [count5, setcount5] = useState(2);

  console.log("value of count is " + count);
  console.log("value of count is1 " + count1);
  console.log("value of count is2 " + count2);
  console.log("value of count is3 " + count3);
  console.log("value of count is4 " + count4);
  console.log("value of count is5 " + count5);

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  const { contract } = useContract(
    "0xDADf2a4eB9A256063080D626422159d4E8E8839c"
  );
  const { mutateAsync: mintStarter_without_id, isLoading } = useContractWrite(
    contract,
    "mintStarter_without_id"
  );

  const { mutateAsync: mintBasic_without_id, isLoading: bisloading } =
    useContractWrite(contract, "mintBasic_without_id");
  const { mutateAsync: mintDiamond_without_id, isLoading: dloading } =
    useContractWrite(contract, "mintDiamond_without_id");
  const { mutateAsync: mintStandard_without_id, isLoading: sisLoading } =
    useContractWrite(contract, "mintStandard_without_id");
  const { mutateAsync: mintVIP_without_id, isLoading: wisLoading } =
    useContractWrite(contract, "mintVIP_without_id");
  const { mutateAsync: mintPremium_without_id, isLoading: misloading } =
    useContractWrite(contract, "mintPremium_without_id");
  const address = useAddress();

  const { mutateAsync: mintBasic, isLoading: msisLoading } = useContractWrite(
    contract,
    "mintBasic"
  );
  const { mutateAsync: mintDiamond, isLoading: smisLoading } = useContractWrite(
    contract,
    "mintDiamond"
  );
  const { mutateAsync: mintPremium, isLoading: ad } = useContractWrite(
    contract,
    "mintPremium"
  );
  const { mutateAsync: mintStandard, isLoading: as } = useContractWrite(
    contract,
    "mintStandard"
  );
  const { mutateAsync: mintStarter, isLoading: gh } = useContractWrite(
    contract,
    "mintStarter"
  );
  const { mutateAsync: mintVIP, isLoading: oy } = useContractWrite(
    contract,
    "mintVIP"
  );

  const StarterCall = async () => {
    try {
      const data = await mintStarter([
        count,
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("0.01"), // send 0.1 ether with the contract call
        },
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const MintBasic = async () => {
    try {
      const data = await mintBasic([
        count1,
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("0.02"), // send 0.1 ether with the contract call
        },
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const MintStandard = async () => {
    try {
      const data = await mintStandard([
        count2,
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("0.03"), // send 0.1 ether with the contract call
        },
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const MintVIP = async () => {
    try {
      const data = await mintVIP([
        count3,
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("0.04"), // send 0.1 ether with the contract call
        },
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const MintPremium = async () => {
    try {
      const data = await mintPremium([
        count4,
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("0.05"), // send 0.1 ether with the contract call
        },
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const MintDiamond = async () => {
    try {
      const data = await mintDiamond([
        count5,
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("0.06"), // send 0.1 ether with the contract call
        },
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  // ---------stake part---------
  const stakingContractAddress = "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7";

  const ContractAddress = "0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD";

  const { contract: stakeContract } = useContract(
    "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
  );
  const { mutateAsync: stake, isLoading: stake_isLoading } = useContractWrite(
    stakeContract,
    "stake"
  );

  const { contract: nftCatDropContract } = useContract(
    ContractAddress,
    "nft-drop"
  );

  const Stake_ = async () => {
    if (!address) return;

    try {
      const isApproved = await nftCatDropContract?.isApproved(
        address,
        stakingContractAddress
      );

      if (!isApproved) {
        await nftCatDropContract?.setApprovalForAll(
          stakingContractAddress,
          true
        );
      }

      const stake = await stakeContract?.call("stake", count);

      // const data = await stake(count);
      console.info("contract call successs", stake);
      alert(stake);
    } catch (err) {
      console.error("contract call failure", err);
      alert(err);
    }
  };

  const Stake_1 = async () => {
    if (!address) return;

    try {
      const isApproved = await nftCatDropContract?.isApproved(
        address,
        stakingContractAddress
      );

      if (!isApproved) {
        await nftCatDropContract?.setApprovalForAll(
          stakingContractAddress,
          true
        );
      }

      const stake = await stakeContract?.call("stake", count1);

      // const data = await stake(count);
      console.info("contract call successs", stake);
      alert(stake);
    } catch (err) {
      console.error("contract call failure", err);
      alert(err);
    }
  };

  const Stake_2 = async () => {
    if (!address) return;

    try {
      const isApproved = await nftCatDropContract?.isApproved(
        address,
        stakingContractAddress
      );

      if (!isApproved) {
        await nftCatDropContract?.setApprovalForAll(
          stakingContractAddress,
          true
        );
      }

      const stake = await stakeContract?.call("stake", count2);

      // const data = await stake(count);
      console.info("contract call successs", stake);
      alert(stake);
    } catch (err) {
      console.error("contract call failure", err);
      alert(err);
    }
  };

  const Stake_3 = async () => {
    if (!address) return;

    try {
      const isApproved = await nftCatDropContract?.isApproved(
        address,
        stakingContractAddress
      );

      if (!isApproved) {
        await nftCatDropContract?.setApprovalForAll(
          stakingContractAddress,
          true
        );
      }

      const stake = await stakeContract?.call("stake", count3);

      // const data = await stake(count);
      console.info("contract call successs", stake);
      alert(stake);
    } catch (err) {
      console.error("contract call failure", err);
      alert(err);
    }
  };

  const Stake_4 = async () => {
    if (!address) return;

    try {
      const isApproved = await nftCatDropContract?.isApproved(
        address,
        stakingContractAddress
      );

      if (!isApproved) {
        await nftCatDropContract?.setApprovalForAll(
          stakingContractAddress,
          true
        );
      }

      const stake = await stakeContract?.call("stake", count4);

      // const data = await stake(count);
      console.info("contract call successs", stake);
      alert(stake);
    } catch (err) {
      console.error("contract call failure", err);
      alert(err);
    }
  };

  const Stake_5 = async () => {
    if (!address) return;

    try {
      const isApproved = await nftCatDropContract?.isApproved(
        address,
        stakingContractAddress
      );

      if (!isApproved) {
        await nftCatDropContract?.setApprovalForAll(
          stakingContractAddress,
          true
        );
      }

      const stake = await stakeContract?.call("stake", count5);

      // const data = await stake(count);
      console.info("contract call successs", stake);
      alert(stake);
    } catch (err) {
      console.error("contract call failure", err);
      alert(err);
    }
  };
  // --------stake end--------
  return (
    <>
      <div className="mint">
        <Header />

        <div className="mint-text">
          <h1 className="elementor-heading-title elementor-size-xxl">
            Mint Gianky
          </h1>
          <div className="container">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                With Referral
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
                WithOut Referral
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
                    (20$)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setcount(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter Referral ID"
                      />
                    </form>

                    {selectedOption === "option1" ? (
                      <>
                        <Web3Button
                          contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                          action={() => StarterCall()}
                        >
                          Buy Now
                        </Web3Button>

                        {/* <div id="stake">
                          <Web3Button
                            contractAddress="0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
                            action={() => Stake_()}
                          >
                            Stake
                          </Web3Button>
                        </div> */}
                      </>
                    ) : (
                      <>
                        <Web3Button
                          contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                          action={() =>
                            mintStarter_without_id([
                              {
                                gasLimit: 1000000, // override default gas limit
                                value: ethers.utils.parseEther("0.01"), // send 0.1 ether with the contract call
                              },
                            ])
                          }
                        >
                          Buy Now
                        </Web3Button>
                      </>
                    )}
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
                    (50$)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setcount1(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter Referral ID"
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
                    {selectedOption === "option1" ? (
                      <>
                        <Web3Button
                          contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                          action={() => MintBasic()}
                        >
                          Buy Now
                        </Web3Button>

                        {/* <div id="stake">
                          <Web3Button
                            contractAddress="0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
                            action={() => Stake_1()}
                          >
                            Stake
                          </Web3Button>
                        </div> */}
                      </>
                    ) : (
                      <Web3Button
                        contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                        action={() =>
                          mintBasic_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("0.02"), // send 0.1 ether with the contract call
                            },
                          ])
                        }
                      >
                        Buy Now
                      </Web3Button>
                    )}
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
                    (100$)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setcount2(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter Referral ID"
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
                    {selectedOption === "option1" ? (
                      <>
                        <Web3Button
                          contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                          action={() => MintStandard()}
                        >
                          Buy Now
                        </Web3Button>

                        {/* <div id="stake">
                          <Web3Button
                            contractAddress="0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
                            action={() => Stake_2()}
                          >
                            Stake
                          </Web3Button>
                        </div> */}
                      </>
                    ) : (
                      <Web3Button
                        contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                        action={() =>
                          mintStandard_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("0.03"), // send 0.1 ether with the contract call
                            },
                          ])
                        }
                      >
                        Buy Now
                      </Web3Button>
                    )}
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
                  selectedOption === "option1"
                    ? "flex flexfortop"
                    : "flex flexb flexc"
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
                    (500$)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setcount3(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter Referral ID"
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
                    {selectedOption === "option1" ? (
                      <>
                        <Web3Button
                          contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                          action={() => MintVIP()}
                        >
                          Buy Now
                        </Web3Button>

                        {/* <div id="stake">
                          <Web3Button
                            contractAddress="0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
                            action={() => Stake_3()}
                          >
                            Stake
                          </Web3Button>
                        </div> */}
                      </>
                    ) : (
                      <Web3Button
                        contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                        action={() =>
                          mintVIP_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("0.04"), // send 0.1 ether with the contract call
                            },
                          ])
                        }
                      >
                        Buy Now
                      </Web3Button>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1"
                    ? "flex flexfortop"
                    : "flex flexb flexc"
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
                    PREMIUM
                    <br />
                    (1000$)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setcount4(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter Referral ID"
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
                    {selectedOption === "option1" ? (
                      <>
                        <Web3Button
                          contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                          action={() => MintPremium()}
                        >
                          Buy Now
                        </Web3Button>

                        {/* <div id="stake">
                          <Web3Button
                            contractAddress="0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
                            action={() => Stake_4()}
                          >
                            Stake
                          </Web3Button>
                        </div> */}
                      </>
                    ) : (
                      <Web3Button
                        contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                        action={() =>
                          mintPremium_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("0.05"), // send 0.1 ether with the contract call
                            },
                          ])
                        }
                      >
                        Buy Now
                      </Web3Button>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1"
                    ? "flex flexfortop"
                    : "flex flexb flexc"
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
                    (5000$)
                  </div>

                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setcount5(e.target.value);
                        }}
                        className="listingInput"
                        placeholder="Enter Referral ID"
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
                    {selectedOption === "option1" ? (
                      <>
                        <Web3Button
                          contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                          action={() => MintDiamond()}
                        >
                          Buy Now
                        </Web3Button>

                        {/* <div id="stake">
                          <Web3Button
                            contractAddress="0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
                            action={() => Stake_5()}
                          >
                            Stake
                          </Web3Button>
                        </div> */}
                      </>
                    ) : (
                      <Web3Button
                        contractAddress="0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
                        action={() =>
                          mintDiamond_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("0.06"), // send 0.1 ether with the contract call
                            },
                          ])
                        }
                      >
                        Buy Now
                      </Web3Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              selectedOption === "option1" ? "footerss mintfooter" : "footerssb"
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
