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


import { FC, useEffect, useState } from "react";
interface NFTCardProps {
    tokenId: number;
    stakingAddress: string;
}


const ClaimableRewards: FC<NFTCardProps> = ({ tokenId, stakingAddress }) => {

    const nftDropContractAddress = "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898";
    const stakingContractAddress = stakingAddress;
    const tokenContractAddress = "0x370806781689E670f85311700445449aC7C3Ff7a";

    console.log("staking address is")
    console.log(stakingContractAddress)

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
    }, [address, contract,claimableRewards, setClaimableRewards]);

  return (
    <>
     <b>
       {!claimableRewards
       ? "Loading..."
       : ethers.utils.formatUnits(claimableRewards, 18)}
       </b>{" "}
    </>
  );
};
export default ClaimableRewards;