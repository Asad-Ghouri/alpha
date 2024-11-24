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

import { ConnectWallet } from "@thirdweb-dev/react";


function Mint() {

  const { contract } = useContract(
    "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"
  );
  
  const address = useAddress();

  const [ListingValue, setListingValue] = useState("200");
  const [selectedOption, setSelectedOption] = useState("option1");

  const [count, setcount] = useState();
  const [count1, setcount1] = useState();
  const [count2, setcount2] = useState();
  const [count3, setcount3] = useState();
  const [count4, setcount4] = useState();
  const [count5, setcount5] = useState();

  
  const [loadingForStarter, setloadingForStarter] = useState(false);
  const [loadingForBasic, setloadingForBasic] = useState(false);
  const [loadingForStandard, setloadingForStandard] = useState(false);
  const [loadingForPremium, setloadingForPremium] = useState(false);
  const [loadingForVip, setloadingForVip] = useState(false);
  const [loadingForDimaond, setloadingForDimaond] = useState(false);

  console.log("value of count is " + count);
  console.log("value of count is1 " + count1);
  console.log("value of count is2 " + count2);
  console.log("value of count is3 " + count3);
  console.log("value of count is4 " + count4);
  console.log("value of count is5 " + count5);

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  
  
  const mintStarter_without_id = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    const data = await contract.call("mintStarter_without_id",
    [],
    {
      gasLimit: 1000000, // override default gas limit
      value: ethers.utils.parseEther("20"), // send 0.1 ether with the contract call
    },
    );
  }
  

  const mintBasic_without_id = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    const data = await contract.call("mintBasic_without_id",
    [],
    {
      gasLimit: 1000000, // override default gas limit
      value: ethers.utils.parseEther("50"), // send 0.1 ether with the contract call
    },
    );
  }
  
  const mintDiamond_without_id = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    const data = await contract.call("mintDiamond_without_id",
    [],
    {
      gasLimit: 1000000, // override default gas limit
      value: ethers.utils.parseEther("5000"), // send 0.1 ether with the contract call
    },
    );
  }
 
 
  const mintStandard_without_id = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    const data = await contract.call("mintStandard_without_id",
    [],
    {
      gasLimit: 1000000, // override default gas limit
      value: ethers.utils.parseEther("100"), // send 0.1 ether with the contract call
    },
    );
  }


  const mintVIP_without_id = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    const data = await contract.call("mintVIP_without_id",
    [],
    {
      gasLimit: 1000000, // override default gas limit
      value: ethers.utils.parseEther("500"), // send 0.1 ether with the contract call
    },
    );
  }
 
  
  const mintPremium_without_id = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    const data = await contract.call("mintPremium_without_id",
    [],
    {
      gasLimit: 1000000, // override default gas limit
      value: ethers.utils.parseEther("1000"), // send 0.1 ether with the contract call
    },
    );
  }

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

  // if (!StarterData) {
  //   alert("Referral id does not exist");
  // } else {
  const StarterCall = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    setloadingForStarter(true)
      try {
    console.log("finish1")
        // const data = await mintStarter( [count] );
        const data = await contract.call("mintStarter",
        [count],
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("20"), // send 0.1 ether with the contract call
        },
        );
        console.info("contract call successs", data);
    setloadingForStarter(false)

        
      } catch (err) {
        console.error("contract call failure", err);
        alert(err)  
    setloadingForStarter(false)
      }
  
  };

  const MintBasic = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    setloadingForBasic(true)
    
      if (count1 < 1000001 || count1 > 6000000) {
        alert("Number must be between 1000001 and 6000000");
      } else {
        try {
        const data = await contract.call("mintBasic",
        [count1],
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("50"), // send 0.1 ether with the contract call
        },
        );
          console.info("contract call successs", data);
        setloadingForBasic(false)
        } catch (err) {
          console.error("contract call failure", err);
          setloadingForBasic(false)
        }
    }
  };

  const MintStandard = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    setloadingForStandard(true)
      if (count2 < 2000001 || count2 > 6000000) {
        alert("Number must be between 2000001 and 6000000");
      } else {
        try {
        const data = await contract.call("mintStandard",
        [count2],
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("100"), // send 0.1 ether with the contract call
        },
        );
          console.info("contract call successs", data);
         setloadingForStandard(false)
        } catch (err) {
        console.error("contract call failure", err);
        setloadingForStandard(false)
        }
      }
    
  };

  const MintVIP = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    setloadingForVip(true)
      if (count3 < 3000001 || count3 > 6000000) {
        alert("Number must be between 3000001 and 6000000");
      } else {
        try {
          // const data = await mintVIP({
          //   args: [count3],
          //   gasLimit: 1000000, // override default gas limit
          //   value: ethers.utils.parseEther("500"), // send 0.1 ether with the contract call
          // });
          const data = await contract.call("mintVIP",
        [count3],
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("500"), // send 0.1 ether with the contract call
        },
        );
          console.info("contract call successs", data);
          setloadingForVip(false)
        } catch (err) {
          console.error("contract call failure", err);
          setloadingForVip(false)
        }
    }
  };

  const MintPremium = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    setloadingForPremium(true)
      if (count4 < 4000001 || count4 > 6000000) {
        alert("Number must be between 4000001 and 6000000");
      } else {
        try {
          // const data = await mintPremium({
          //   args: [count4],
          //   gasLimit: 1000000, // override default gas limit
          //   value: ethers.utils.parseEther("1000"), // send 0.1 ether with the contract call
          // });
          const data = await contract.call("mintPremium",
        [count4],
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("1000"), // send 0.1 ether with the contract call
        },
        );
          console.info("contract call successs", data);
          setloadingForPremium(false)
        } catch (err) {
          console.error("contract call failure", err);
          setloadingForPremium(false)
        }
    }
  };

  const MintDiamond = async () => {
    if(!address){
      alert("connect you wallet first")
      return;
    }
    setloadingForDimaond(true)
      if (count5 < 5000001 || count5 > 6000000) {
        alert("Number must be between 5000001 and 6000000");
      } else {
        try {
          // const data = await mintDiamond({
          //   args: [count5],
          //   gasLimit: 1000000, // override default gas limit
          //   value: ethers.utils.parseEther("5000"), // send 0.1 ether with the contract call
          // });
        const data = await contract.call("mintDiamond",
        [count5],
        {
          gasLimit: 1000000, // override default gas limit
          value: ethers.utils.parseEther("5000"), // send 0.1 ether with the contract call
        },
        );
          console.info("contract call successs", data);
          setloadingForDimaond(false)
        } catch (err) {
          console.error("contract call failure", err);
          setloadingForDimaond(false)
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
      <div className="mint" id="mint">
        {/* <Header /> */}
             
        <div className="mint-text">
       <div className="conbtn"> <ConnectWallet /></div>
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
                className={selectedOption === "option1" ? "flex hma" : "flex hma flexb"}
              >
                <div
                className="flex flex-col gap-8 border border-gray-700 rounded-xl p-12 fmbs"
                  style={{
                    margin: "0 10px",
                    padding: "10px",
                    width: "375px",
                    height: "290px",
                  }}
                >
                  <img
                    src="https://sovanza.com/assert/1.gif"
                    alt="GIF 1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="giftext">
                    STARTER
                    {/* <br /> */}
                    (20POL)
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
                        <button
                          onClick={() => StarterCall()}
                          className="butNbtn"
                          
                        >
                         {loadingForStarter?"loading..." : "Buy Now"}
                        </button>

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
                        <button
                          onClick={() => mintStarter_without_id()}
                          className="butNbtn"
                        >
                          Buy Now
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1" ? "flex hma" : "flex flexb hma flexd"
                }
              >
                <div className="fmbs"
                  style={{
                    margin: "0 10px",
                    padding: "10px",
                    width: "375px",
                    height: "290px",
                  }}
                >
                  <img
                    src="https://sovanza.com/assert/2.gif"
                    alt="GIF 2"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <div className="giftext">
                    Basic
                    {/* <br /> */}
                    (50POL)
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
                   
                    {selectedOption === "option1" ? (
                      <>
                        <button
                          onClick={() => MintBasic()}
                          className="butNbtn"
                        >
                        {loadingForBasic?"Loading..." :  "Buy Now"} 
                        </button>

                      </>
                    ) : (
                      <button
                        onClick={() =>
                          mintBasic_without_id()
                        }
                        className="butNbtn"
                      >
                        Buy Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1" ? "flex hma" : "flex flexb hma flexd"
                }
              >
                <div className="fmbs"
                  style={{
                    margin: "0 10px",
                    padding: "10px",
                    width: "375px",
                    height: "290px",
                  }}
                >
                  <img
                    src="https://sovanza.com/assert/3.gif"
                    alt="GIF 3"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="giftext">
                    STANDARD
                    {/* <br /> */}
                    (100POL)
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
                    
                    {selectedOption === "option1" ? (
                      <>
                        <button
                          onClick={() => MintStandard()}
                          className="butNbtn"
                        >
                        {loadingForStandard?"Loading...":"Buy Now"}  
                        </button>

                        
                      </>
                    ) : (
                      <button
                        onClick={() =>
                          mintStandard_without_id()
                        }
                        className="butNbtn"
                      >
                        Buy Now
                      </button>
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
                    ? "flex flexfortop flexfortopg"
                    : "flex flexb  flexfortopg flexc"
                }
              >
                <div className="fmbs"
                  style={{
                    margin: "0 10px",
                    padding: "10px",
                    width: "375px",
                    height: "290px",
                  }}
                >
                  <img
                    src="https://sovanza.com/assert/4.gif"
                    alt="GIF 1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="giftext">
                    VIP
                    {/* <br /> */}
                    (500POL)
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
                        <button
                         onClick={() => MintVIP()}
                         className="butNbtn"
                        >
                         {loadingForVip?"Loading...":"Buy Now"} 
                        </button>

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
                      <button
                        onClick={() =>
                          mintVIP_without_id()
                        }
                        className="butNbtn"
                      >
                        Buy Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1"
                    ? "flex flexfortop flexfortopg"
                    : "flex flexb flexc flexfortopg"
                }
              >
                <div className="fmbs"
                  style={{
                    margin: "0 10px",
                    padding: "10px",
                    width: "375px",
                    height: "290px",
                  }}
                >
                  <img
                    src="https://sovanza.com/assert/5.gif"
                    alt="GIF 2"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="giftext">
                    PREMIUM
                    {/* <br /> */}
                    (1000POL)
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
                        <button
                          onClick={() => MintPremium()}
                          className="butNbtn"
                        >
                         {loadingForPremium?"Loading...":" Buy Now"}
                        </button>

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
                      <button
                        onClick={() =>
                          mintPremium_without_id()
                        }
                        className="butNbtn"
                      >
                        Buy Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedOption === "option1"
                    ? "flex flexfortop flexfortopg"
                    : "flex flexb flexc flexfortopg"
                }
              >
                <div className="fmbs"
                  style={{
                    margin: "0 10px",
                    padding: "10px",
                    width: "375px",
                    height: "290px",
                  }}
                >
                  <img
                    src="https://sovanza.com/assert/6.gif"
                    alt="GIF 3"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="giftext">
                    DIAMOND
                    {/* <br /> */}
                    (5000POL)
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
                        <button
                          onClick={() => MintDiamond()}
                          className="butNbtn"
                        >
                        {loadingForDimaond?"Loading...":"Buy Now"}  
                        </button>

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
                      <button
                        onClick={() =>
                          mintDiamond_without_id()
                        }
                        className="butNbtn"
                      >
                        Buy Now
                      </button>
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
            {/* <Footer /> */}
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
