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


import { useEffect, useState } from "react";

export default function ClaimableRewards(props:any) {

    
    const nftDropContractAddress = "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898";
    const stakingContractAddress = props.stakingAddress;
    const tokenContractAddress = "0x370806781689E670f85311700445449aC7C3Ff7a";

    const address = useAddress();
    const { contract: nftDropContract } = useContract(
        nftDropContractAddress,
        "nft-drop"
    );
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();

    const { contract, isLoading } = useContract(stakingContractAddress);

    useEffect(() => {
        if (!contract || !address) return;

        async function loadClaimableRewards() {
            const stakeInfo = await contract?.call("getStakeInfo", [address]);
            console.log("rewards are " + stakeInfo)
            setClaimableRewards(stakeInfo[1]);
        }

        loadClaimableRewards();
    }, [address, contract]);

  return (
    <>
     <b>
                                                    {!claimableRewards
                                                        ? "Loading..."
                                                        : ethers.utils.formatUnits(claimableRewards, 18)}
                                                </b>{" "}
    </>
  );
}