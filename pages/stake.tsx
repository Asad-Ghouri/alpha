import {
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useContractWrite,
    useTokenBalance,
    Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import { Header } from "../components/Header";

import { useNFTs, useNFT, useContractRead } from "@thirdweb-dev/react";
import LoggedIn from "../components/loggedIn";


const stakingContractAddress = "0xff67A6A0144d149dF00E4b2bE41b16a48C97e495";

const ContractAddress = "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898";



const Stake: NextPage = () => {


    const address = useAddress();

    const { contract: nftCatDropContract } = useContract(
        ContractAddress,
        "nft-drop"
    );

    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();

    const { contract: nftDropContract } = useContract(
        ContractAddress,
        "nft-drop"
    );
    const [stakedNfts, setStakedNfts] = useState<any>([]);


    const { contract } = useContract(
        "0xff67A6A0144d149dF00E4b2bE41b16a48C97e495"
    );




    const { contract: stakecontract } = useContract("0xff67A6A0144d149dF00E4b2bE41b16a48C97e495");
    const { mutateAsync: withdraw, isLoading } = useContractWrite(stakecontract, "withdraw")

    const Widhraw = async (id) => {
        try {
            console.log("widraw id is " + id)
            const data = await withdraw([id, "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    async function claimRewards() {
        const claim = await contract?.call("claimRewards");
    }

    async function ShowRewards() {
        // var cr = await contract.call("availableRewards", address);
        // setClaimableRewards(cr);
        // alert("your rewards are " + claimdata + claimableRewards)
    }
    const tokenContractAddress = "0x370806781689E670f85311700445449aC7C3Ff7a";

    const { contract: tokenContract } = useContract(
        tokenContractAddress,
        "token"
    );
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);


    async function loadClaimableRewards() {
        console.log("before call");
        var cr = await contract?.call("availableRewards", address);
        console.log("Loaded claimable rewards", cr);
        setClaimableRewards(cr);
    }

    // useEffect(() => {
    //     if (!address) return;


    //     loadClaimableRewards();
    // }, [address, contract, nftCatDropContract]);


    useEffect(() => {
        if (!address) return;

        async function loadStakedNfts() {
            const stakedTokens = await contract?.call("getStakedTokens", address);

            const stakedNfts = await Promise.all(
                stakedTokens?.map(
                    async (stakedToken: { staker: string; tokenId: BigNumber }) => {
                        // const as = stakedToken.tokenId.toNumber();
                        // if (as != 0) {


                        const nft = await nftDropContract?.get(stakedToken.tokenId);
                        return nft;
                        // }
                    }
                )
            );

            setStakedNfts(stakedNfts);
            console.log("setStakedNfts", stakedNfts);
        }

        // if (address) {
        loadStakedNfts();
        // }
    }, [address, contract, nftCatDropContract]);

    return (
        <>

            <div className={address ? "stake loadingstake" : "stake loadingstake"}>

                <Header />
                <div
                    className={
                        !address
                            ? "stakeaa loadingstakea"

                            : ""
                    }
                >

                    {!address ? (

                        <div className="connect"> <ConnectWallet accentColor="#f213a4" colorMode="dark" /> </div>
                        // undefined
                    ) : (
                        <div>
                            <h2 className={styles.walletbalance}>WALLET BALANCE</h2>

                            <div className={styles.tokenGrid}>
                                <div className={styles.tokenItem}>
                                    <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
                                    <p className={styles.tokenValue}>
                                        <b>
                                            {!claimableRewards
                                                ? "Loading..."
                                                : ethers.utils.formatUnits(claimableRewards, 9)}

                                        </b>{" "}


                                    </p>
                                </div>
                                <div className={styles.tokenItem}>
                                    <h3 className={styles.tokenLabel}>Your Gianky Balance</h3>
                                    <p className={styles.tokenValue}>
                                        <b>
                                            <b>{!tokenBalance ? "Loading..." : tokenBalance?.displayValue.substring(0, 4)}</b>
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

                            <div className={styles.buttonContainer}>
                                <button
                                    className={`${styles.mainButton} ${styles.spacerTop}`}
                                    onClick={() => loadClaimableRewards()}
                                >
                                    Show Rewards
                                </button>
                            </div>

                            <hr className={`${styles.divider} ${styles.spacerTop}`} />

                            <div className={styles.buttonContainer}>
                                <h2 className="uc">Your UnStaked NFTs</h2>
                            </div>

                            <LoggedIn />


                            <div className={styles.buttonContainer}>   <h2 className="uc">Your Staked NFTs</h2> </div>
                            {
                                !tokenBalance ? <p className="load"> Loading... </p>
                                    :
                                    <div>
                                        <div className={styles.nftBoxGrid + " " + styles.imgcenter}>
                                            {stakedNfts.length > 0 ?
                                                <div>
                                                    {stakedNfts?.map((nft: any) => (
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


                                                                    <Web3Button
                                                                        contractAddress="0xff67A6A0144d149dF00E4b2bE41b16a48C97e495"
                                                                        action={() => {
                                                                            Widhraw(nft.metadata.id)
                                                                        }}
                                                                    >
                                                                        withdraw
                                                                    </Web3Button>
                                                                    <div key="1"></div>

                                                                </div>
                                                            ) : (
                                                                <div key="1"></div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                                :
                                                <h3>You do not have any staked nft</h3>
                                            }

                                        </div>
                                    </div>
                            }

                        </div>
                    )}
                </div>
            </div>

        </>
    );
};

export default Stake;
