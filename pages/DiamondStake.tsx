import {
    ConnectWallet,
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useContractRead,
    useOwnedNFTs,
    useTokenBalance,
    Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard";

import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import LoggedIn from "../components/loggedIn";
import React from "react";

import ClaimableRewards from "../components/ClaimableRewards" 

const Stake: NextPage = () => {

    const nftDropContractAddress = "0x106fb804D03D4EA95CaeFA45C3215b57D8E6835D";
    const stakingContractAddress = "0x8e5c4aFd3ba4380005b4E422BFdA178Ab25C983D";
    const tokenContractAddress = "0x64487539aa9d61Bdc652A5755bbe30Ee96cFcEb2";

    const address = useAddress();
    const { contract: nftDropContract } = useContract(
        nftDropContractAddress,
        "nft-drop"
    );
    const { contract: tokenContract } = useContract(
        tokenContractAddress,
        "token"
    );
    const { contract, isLoading } = useContract(stakingContractAddress);
    const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
    const { data: tokenBalance, isLoading: tisLoading } = useTokenBalance(tokenContract, address);
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
    const { data: stakedTokens, isLoading: stisLoading } = useContractRead(contract, "getStakeInfo", [address]);

    // useEffect(() => {
    //     if (!contract || !address) return;

    //     async function loadClaimableRewards() {
    //         const stakeInfo = await contract?.call("getStakeInfo", [address]);
    //         console.log("rewards are " + stakeInfo)
    //         setClaimableRewards(stakeInfo[1]);
    //     }

    //     loadClaimableRewards();
    // }, [address, contract, claimableRewards, setClaimableRewards]);



    const minvalue = 5000001;
    const maxval = 6000000;
    return (
        <>
            <div className={address ? "stake loadingstake" : "stake loadingstake"}>

                {/* <Header /> */}
                <div
                    className={
                        !address
                            ? "stakeaa loadingstakea"

                            : ""
                    }
                >

                    {!address ? (

                        <div className="connect"> <ConnectWallet /> </div>
                        // undefined
                    ) : (
                        <div className={styles.container}>
                        <div className=""> <ConnectWallet /> </div>
                            <h1 className={styles.h1}>Stake Your NFTs</h1>
                            <hr className={`${styles.divider} ${styles.spacerTop}`} />

                            {!address ? (
                                <ConnectWallet />
                            ) : (
                                <>
                                    <h2>Your Tokens</h2>
                                    <div className={styles.tokenGrid}>
                                        <div className={styles.tokenItem}>
                                            <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
                                            <p className={styles.tokenValue}>
                                                <b>
                                                <ClaimableRewards stakingAddress={stakingContractAddress} tokenId={0}/>
                                                </b>{" "}
                                                {tokenBalance?.symbol}
                                            </p>
                                        </div>
                                        <div className={styles.tokenItem}>
                                            <h3 className={styles.tokenLabel}>Current Balance</h3>
                                            <p className={styles.tokenValue}>
                                                <b>{tisLoading ? "Loading..." : tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
                                            </p>
                                        </div>
                                    </div>

                                    <Web3Button
                                        action={(contract) => contract.call("claimRewards")}
                                        contractAddress={stakingContractAddress}
                                    >
                                        Claim Rewards
                                    </Web3Button>

                                    <hr className={`${styles.divider} ${styles.spacerTop}`} />
                                    <h2>Your Unstaked NFTs</h2>
                                    <LoggedIn stakingContractAddres={stakingContractAddress} minvalue={minvalue} maxvalue={maxval} />

                                    <hr className={`${styles.divider} ${styles.spacerTop}`} />
                                    <h2>Your Staked NFTs</h2>
                                    {
                                        stisLoading ?
                                            "Loading..." :
                                            tisLoading ?
                                                "Loading..."
                                                :
                                                <div className={styles.nftBoxGrid}>
                                                    {stakedTokens &&
                                                        stakedTokens[0]?.map((stakedToken: BigNumber) => (
                                                            <NFTCard
                                                                tokenId={stakedToken.toNumber()}
                                                                stakingContractAddresss={stakingContractAddress}
                                                                key={stakedToken.toString()}
                                                            />
                                                        ))}
                                                </div>
                                    }
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

        </>
    );
};

export default Stake;
