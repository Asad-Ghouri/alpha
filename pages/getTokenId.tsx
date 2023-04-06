import React from "react";
import {
    ThirdwebNftMedia,
    useOwnedNFTs,
} from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

import styles from "../styles/Home.module.css";

export default function MainSwap() {
    const address = useAddress();

    console.log(address)
    const [selectval, setselectval] = useState<string>("0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD");

    const stakingContractAddress = "0x5289D2c34559f25fd6d7045Dd95a2a4936702b9b";

    const nftCatContractAddress = "0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD";


    const { contract: nftCatDropContract } = useContract(
        nftCatContractAddress,
        "nft-drop"
    );

    useEffect(() => {
        if (!contract) return;

        async function loadStakedCatNfts() {
            const tokenId = 0;
            const nft = await contract.erc721.get(tokenId);
            console.log("nfts are " + nft)
        }

        loadStakedCatNfts();

    }, []);



    const { contract } = useContract(
        "0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD"
    );

    const { data: ownedCatNfts } = useOwnedNFTs(contract, address);



    async function stakeCatNft(id: string) {
        if (!address) return;


        const isApproved = await nftCatDropContract?.isApproved(
            address,
            stakingContractAddress
        );

        if (!isApproved) {
            await nftCatDropContract?.setApprovalForAll(stakingContractAddress, true);
        }


        const stake = await contract?.call("stake", id, selectval);

    }


    async function sendindex() {


        return (
            <>
                <div className={styles.buttonContainer}>
                    <h2 className="uc">Stake Your Unstaked NFTs</h2>
                </div>




                {/* ------   for cat ---- */}

                {selectval === "0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD" ? (
                    <>
                        <h2>Your Unstaked NFTs</h2>
                        <div className={styles.nftBoxGrid}>
                            {ownedCatNfts?.map((nft) => (
                                <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                                    <ThirdwebNftMedia
                                        metadata={nft.metadata}
                                        className={styles.nftMedia}
                                    />
                                    <h3>{nft.metadata.name}</h3>
                                    <button
                                        // contractAddress={stakingContractAddress}
                                        className={`${styles.mainButton} ${styles.spacerTop}`}
                                        onClick={() => stakeCatNft(nft.metadata.id)}
                                    >
                                        Stake
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    console.log("Cat is not calling ")
                )}



            </>
        );
    }
}

// export default GetTokenId;