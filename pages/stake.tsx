import {
    ThirdwebNftMedia,
    useAddress,
    useContract,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import StakeBalance from "./StakeBalance";
import { Header } from "../components/Header";

const stakingContractAddress = "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7";

const ContractAddress = "0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD";

const Stake: NextPage = () => {

    const [selectval, setselectval] = useState<string>(
        "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
    );

    const address = useAddress();

    const { contract: nftCatDropContract } = useContract(
        ContractAddress,
        "nft-drop"
    );

    const { contract, isLoading } = useContract(stakingContractAddress);
    const [stakedCatNfts, setStakedCatNfts] = useState<any>([]);

    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();

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


    async function withdraw(id: BigNumber) {
        const withdraw = await contract?.call("withdraw", id, selectval);
    }

    async function claimRewards() {
        const claim = await contract?.call("claimRewards");
    }

    if (isLoading) {
        return (
            <div className="stake loadingstake">

                <Header />

                <div className="loading">Loading</div>
            </div>
        )
    }

    return (
        <>

            <div className={address ? "stake" : "stake loadingstake"}>

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
                                        </b>
                                    </p>
                                </div>
                                <div className={styles.tokenItem}>
                                    <h3 className={styles.tokenLabel}>Your Gianky Balance</h3>
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
                            {selectval === "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7" ? (
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
                            ) :
                                undefined
                            }
                        </>
                    )}
                </div>
            </div>

        </>
    );
};

export default Stake;
