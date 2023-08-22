import ezgifcom from "../public/assert/ezgif.com-video-to-gif.gif";
import two from "../public/assert/2.gif";
import three from "../public/assert/3.gif";
import four from "../public/assert/4.gif";
import five from "../public/assert/five.gif";
import six from "../public/assert/6.gif";
import Image from "next/image";
import Footer from "./Footer";
import { Header } from "../components/Header";
import { SetStateAction, useState } from "react";
import { BigNumber, ethers } from "ethers";

import {
  useContract,
  useContractWrite,
  Web3Button,
  useAddress,
  useContractRead,
} from "@thirdweb-dev/react";

function Mint() {
  const [ListingValue, setListingValue] = useState("200");
  const [selectedOption, setSelectedOption] = useState("option1");

  const [count, setcount] = useState();
  const [count1, setcount1] = useState();
  const [count2, setcount2] = useState();
  const [count3, setcount3] = useState();
  const [count4, setcount4] = useState();
  const [count5, setcount5] = useState();

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
    "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
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

  const { data: StarterData, isLoading: StarterisLoading } = useContractRead(
    contract,
    "ownerOf",
    [count]
  );

  console.log("value of StarterData owner is " + StarterData);

  const { data: BacicData, isLoading: BacicisLoading } = useContractRead(
    contract,
    "ownerOf",
    [count1]
  );
  const { data: StandardData, isLoading: StandardisLoading } = useContractRead(
    contract,
    "ownerOf",
    [count2]
  );
  const { data: VipData, isLoading: VipLoading } = useContractRead(
    contract,
    "ownerOf",
    [count3]
  );
  const { data: PremiumData, isLoading: PremiumisLoading } = useContractRead(
    contract,
    "ownerOf",
    [count4]
  );
  const { data: DiamondData, isLoading: DiamondisLoading } = useContractRead(
    contract,
    "ownerOf",
    [count5]
  );

  const StarterCall = async () => {
    if (!StarterData) {
      alert("Referral id does not exist");
    } else {
      try {
        const data = await mintStarter({ args: [count],
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("0.12"), // send 0.1 ether with the contract call
        
        });
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }
  };

  const MintBasic = async () => {
    if (!BacicData) {
      alert("Referral id does not exist");
    } else {
      if (count1 < 1000001 || count1 > 6000000) {
        alert("Number must be between 1000001 and 6000000");
      } else {
        try {
          const data = await mintBasic({ args: [count1],
            gasLimit: 1000000, // override default gas limit
            value: ethers.utils.parseEther("50"), // send 0.1 ether with the contract call
          });
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }
    }
  };

  const MintStandard = async () => {
    if (!StandardData) {
      alert("Referral id does not exist");
    } else {
      if (count2 < 2000001 || count2 > 6000000) {
        alert("Number must be between 2000001 and 6000000");
      } else {
        try {
          const data = await mintStandard({ args: [count2],
            gasLimit: 1000000, // override default gas limit
            value: ethers.utils.parseEther("100"), // send 0.1 ether with the contract call
          });
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }
    }
  };

  const MintVIP = async () => {
    if (!VipData) {
      alert("Referral id does not exist");
    } else {
      if (count3 < 3000001 || count3 > 6000000) {
        alert("Number must be between 3000001 and 6000000");
      } else {
        try {
          const data = await mintVIP({ args: [count3],
            gasLimit: 1000000, // override default gas limit
              value: ethers.utils.parseEther("500"), // send 0.1 ether with the contract call
          });
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }
    }
  };

  const MintPremium = async () => {
    if (!PremiumData) {
      alert("Referral id does not exist");
    } else {
      if (count4 < 4000001 || count4 > 6000000) {
        alert("Number must be between 4000001 and 6000000");
      } else {
        try {
          const data = await mintPremium({ args: [count4],
            gasLimit: 1000000, // override default gas limit
            value: ethers.utils.parseEther("1000"), // send 0.1 ether with the contract call
          });
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }
    }
  };

  const MintDiamond = async () => {
    if (!DiamondData) {
      alert("Referral id does not exist");
    } else {
      if (count5 < 5000001 || count5 > 6000000) {
        alert("Number must be between 5000001 and 6000000");
      } else {
        try {
          const data = await mintDiamond({ args: [count5],
            gasLimit: 1000000, // override default gas limit
            value: ethers.utils.parseEther("5000"), // send 0.1 ether with the contract call
          });
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }
    }
  };

  // ---------stake part---------
  // const stakingContractAddress = "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7";

  const ContractAddress = "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898";

  // const { contract: stakeContract } = useContract(
  //   "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
  // );
  // const { mutateAsync: stake, isLoading: stake_isLoading } = useContractWrite(
  //   stakeContract,
  //   "stake"
  // );

  const { contract: nftCatDropContract } = useContract(
    ContractAddress,
    "nft-drop"
  );

  
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
                  <img
                    src="https://itishstudios.net/assert/ezgif.com-video-to-gif.gif"
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
                    (20Matic)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="number"
                        min={1}
                        max={6000000}
                        value={count}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (inputValue > 6000000) {
                            alert("Number must be between 1 and 1000000");
                          } else {
                            setcount(e.target.value);
                          }
                        }}
                        className="listingInput"
                        placeholder="Enter Referral ID"
                      />
                    </form>

                    {selectedOption === "option1" ? (
                      <>
                        <Web3Button
                          contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
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
                          contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
                          action={() =>
                            mintStarter_without_id([
                              {
                                gasLimit: 1000000, // override default gas limit
                                value: ethers.utils.parseEther("20"), // send 0.1 ether with the contract call
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
                  <img
                    src="https://itishstudios.net/assert/2.gif"
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
                    (50Matic)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="number"
                        min={1000001}
                        max={6000000}
                        value={count1}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (inputValue > 6000000) {
                            alert("Number must be between 1000001 and 6000000");
                          } else {
                            setcount1(e.target.value);
                          }
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
                          contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
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
                        contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
                        action={() =>
                          mintBasic_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("50"), // send 0.1 ether with the contract call
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
                  <img
                    src="https://itishstudios.net/assert/3.gif"
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
                    (100Matic)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="number"
                        min={2000001}
                        max={6000000}
                        value={count2}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (inputValue > 6000000) {
                            alert("Number must be between 2000001 and 6000000");
                          } else {
                            setcount2(e.target.value);
                          }
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
                          contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
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
                        contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
                        action={() =>
                          mintStandard_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("100"), // send 0.1 ether with the contract call
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
                  <img
                    src="https://itishstudios.net/assert/4.gif"
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
                    (500Matic)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="number"
                        min={2000001}
                        max={6000000}
                        value={count3}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (inputValue > 6000000) {
                            alert("Number must be between 2000001 and 6000000");
                          } else {
                            setcount3(e.target.value);
                          }
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
                          contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
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
                        contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
                        action={() =>
                          mintVIP_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("500"), // send 0.1 ether with the contract call
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
                  <img
                    src="https://itishstudios.net/assert/five.gif"
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
                    (1000Matic)
                  </div>
                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="number"
                        min={4000001}
                        max={6000000}
                        value={count4}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (inputValue > 6000000) {
                            alert("Number must be between 4000001 and 6000000");
                          } else {
                            setcount4(e.target.value);
                          }
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
                          contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
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
                        contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
                        action={() =>
                          mintPremium_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("1000"), // send 0.1 ether with the contract call
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
                  <img
                    src="https://itishstudios.net/assert/6.gif"
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
                    (5000Matic)
                  </div>

                  <div>
                    <form
                      className={selectedOption === "option1" ? "db" : "d-n"}
                    >
                      <input
                        type="number"
                        min={5000001}
                        max={6000000}
                        value={count5}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (inputValue > 6000000) {
                            alert("Number must be between 5000001 and 6000000");
                          } else {
                            setcount5(e.target.value);
                          }
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
                          contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
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
                        contractAddress="0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
                        action={() =>
                          mintDiamond_without_id([
                            {
                              gasLimit: 1000000, // override default gas limit
                              value: ethers.utils.parseEther("5000"), // send 0.1 ether with the contract call
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
