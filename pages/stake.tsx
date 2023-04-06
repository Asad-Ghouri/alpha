import {
    ThirdwebNftMedia,
    useAddress,
    useMetamask,
    useTokenBalance,
    useOwnedNFTs,
    useContract,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { ConnectWallet, useSDK } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import Link from "next/link";
// import BackIcon from "../public/icons/BackIcon.png";
import Image from "next/image";
// import GetTokenId from "./getTokenId";

import { useRef } from "react";

// import { ConnectWallet } from "@thirdweb-dev/react";
import StakeBalance from "./StakeBalance";


const stakingContractAddress = "0x5289D2c34559f25fd6d7045Dd95a2a4936702b9b";

const nftCatContractAddress = "0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD";

const Stake: NextPage = () => {
    // const [claimableRewards1, setClaimableRewards1] = useState<BigNumber>();

    const [selectval, setselectval] = useState<string>(
        "0x5289D2c34559f25fd6d7045Dd95a2a4936702b9b"
    );

    const [value, setValue] = useState("");

    // const connectWithMetamask = useMetamask();
    const address = useAddress();

    console.log("balance is " + value);


    const { contract: nftCatDropContract } = useContract(
        nftCatContractAddress,
        "nft-drop"
    );

    const { contract, isLoading } = useContract(stakingContractAddress);
    const [stakedCatNfts, setStakedCatNfts] = useState<any>([]);

    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();




    // ----------for Cat ----------
    useEffect(() => {
        if (!contract) return;

        async function loadStakedCatNfts() {
            const stakedTokens = await contract?.call("getStakedTokens", address);

            const stakedCatNfts1 = await Promise.all(
                stakedTokens?.map(
                    async (stakedToken: { staker: string; tokenId: BigNumber }) => {
                        if (stakedToken.tokenId) {
                            const as = stakedToken.tokenId.toNumber();
                            if (as != 0) {
                                const nft = await nftCatDropContract?.get(stakedToken.tokenId);
                                return nft;
                            }
                        }
                    }
                )
            );

            setStakedCatNfts(stakedCatNfts1);
            console.log("setstakedHorseNfts", stakedCatNfts1);
        }

        if (address) {
            loadStakedCatNfts();
        }
    }, [address, contract, nftCatDropContract]);


    useEffect(() => {
        if (!contract || !address) return;

        async function loadClaimableRewards() {
            var cr = await contract?.call("availableRewards", address);
            console.log("Loaded claimable rewards", cr);
            setClaimableRewards(cr);
        }

        loadClaimableRewards();
    }, [address, contract]);

    useEffect(() => {
        var autoas = document.getElementById("autom");
        if (autoas) {
            autoas.click();
            console.log("function is calling");
        } else {
            console.log("function is not calling");
        }
    }, []);

    async function withdraw(id: BigNumber) {
        const withdraw = await contract?.call("withdraw", id, selectval);
    }

    async function claimRewards() {
        const claim = await contract?.call("claimRewards");
    }

    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <>
            <div
                className={
                    !address
                        ? styles.container +
                        " " +
                        styles.stakecontainer +
                        " " +
                        styles.stakeco
                        : styles.container + styles.stakecontainer
                }
            >
                <hr className={`${styles.divider} ${styles.spacerTop}`} />

                {!address ? (
                    <>
                        <ConnectWallet accentColor="#f213a4" colorMode="dark" />
                    </>
                ) : (
                    <>
                        <h2 className={styles.walletbalance}>WALLET BALANCE</h2>

                        <div className={styles.tokenGrid}>
                            <div className={styles.tokenItem}>
                                <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
                                <p className={styles.tokenValue}>
                                    <b>
                                        {!claimableRewards
                                            ? "Loading..."
                                            : ethers.utils.formatUnits(claimableRewards, 9)}
                                        {/* : ethers.utils.formatUnits(claimableRewards, 11)} */}
                                        {/* :
                         ethers.utils.mul} */}
                                        {/* } */}
                                    </b>{" "}
                                    {/* {tokenBalance?.symbol} */}
                                </p>
                            </div>
                            <div className={styles.tokenItem}>
                                <h3 className={styles.tokenLabel}>Your Shera Balance</h3>
                                <p className={styles.tokenValue}>
                                    <b>
                                        <StakeBalance />
                                    </b>
                                </p>
                            </div>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button
                                className={`${styles.mainButton} ${styles.spacerTop}`}
                                onClick={() => claimRewards()}
                            >
                                Claim Rewards
                            </button>
                        </div>

                        <hr className={`${styles.divider} ${styles.spacerTop}`} />

                        <div className={styles.buttonContainer}>
                            <h2 className="uc">Your Staked NFTs</h2>
                        </div>





                        {/* ---- for Cat ---- */}
                        {selectval === "0x551c03246cc1d5e276f2dc264253decfa9b011c6" ? (
                            <div className={styles.nftBoxGrid + " " + styles.imgcenter}>
                                {stakedCatNfts?.map((nft: any) => (
                                    <div className="console log" key="12">
                                        {nft ? (
                                            <div
                                                className={styles.nftBox}
                                                key={nft.metadata.id.toString()}
                                            >
                                                <h3>{nft.metadata.name}</h3>
                                                <ThirdwebNftMedia
                                                    metadata={nft.metadata}
                                                    className={styles.nftMedia}
                                                />
                                                <button
                                                    className={`${styles.mainButton} ${styles.spacerBottom} ${styles.wi}`}
                                                    onClick={() => withdraw(nft.metadata.id)}
                                                >
                                                    Withdraw
                                                </button>
                                            </div>
                                        ) : (
                                            <div key="1">{""}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            console.log("Cat is not calling ")
                        )}



                        <hr className={`${styles.divider} ${styles.spacerTop}`} />

                        {/* <GetTokenId /> */}
                    </>
                )}
            </div>
        </>
    );
};

export default Stake;
