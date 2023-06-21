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

// import StakeBalance from "./StakeBalance";
import { Header } from "../components/Header";

import Starter from "./starter";
import Basic from "./basic";
import Diamond from "./diamond";
import Vip from "./vip";
import Premium from "./premium";
import Standard from "./standard";
// import MainSwap from "./getTokenId";


import { useOwnedNFTs } from "@thirdweb-dev/react";
import { useNFTs, useNFT, useContractRead } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import LoggedIn from "../components/loggedIn";


const stakingContractAddress = "0xF2fE314bA778b1455b5393af9b69C9a85B80E6BF";

// const ContractAddress = "0xCecfA9E346C67d2fc89Af771FaA97c9f18c295bD";
const ContractAddress = "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898";
// const contractAddress = "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898";



const Stake: NextPage = () => {

    const [selectval, setselectval] = useState<string>(
        "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7"
    );

    const address = useAddress();

    const { contract: nftCatDropContract } = useContract(
        ContractAddress,
        "nft-drop"
    );
    const [stakedNfts, setStakedNfts] = useState<any>([]);

    const { contract: nftDropContract } = useContract(
        ContractAddress,
        "nft-drop"
    );


    useEffect(() => {
        if (!contract) return;



        async function loadStakedNfts() {
            const stakedTokens = await contract?.call("get_stakedTokens", address);

            // For each staked token, fetch it from the sdk
            // setbg(new BigNumber(0));
            const stakedNfts = await Promise.all(
                stakedTokens?.map(
                    async (stakedToken: { staker: string; tokenId: BigNumber }) => {
                        const as = stakedToken.tokenId.toNumber();
                        if (as != 0) {
                            const nft = await nftDropContract?.get(stakedToken.tokenId);
                            return nft;
                        }
                    }
                )
            );

            setStakedNfts(stakedNfts);
            console.log("setStakedNfts", stakedNfts);
        }

        if (address) {
            loadStakedNfts();
        }
    }, [address]);

    // const { contract, isLoading } = useContract(stakingContractAddress);
    // const [stakedCatNfts, setStakedCatNfts] = useState<any>([]);

    // const [claimableRewards, setClaimableRewards] = useState<BigNumber>();




    // ------- un stakednft --------

    const abi = [{ "inputs": [{ "internalType": "contract ICustomERC20", "name": "_giankyToken", "type": "address" }, { "internalType": "address payable", "name": "_splitter", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "referralId", "type": "uint256" }], "name": "NFTMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "BASIC_PRICE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DIAMOND_PRICE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "GIANKY_REWARD_RATE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PREMIUM_PRICE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "STANDARD_PRICE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "STARTER_PRICE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "VIP_PRICE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "addressToReferralCountsBasic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "addressToReferralCountsDiamond", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "addressToReferralCountsPremium", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "addressToReferralCountsStandard", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "addressToReferralCountsStarter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "addressToReferralCountsVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "distributeRewards", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "address payable", "name": "_to", "type": "address" }], "name": "distributeRewardsroY", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getGiankyRewardRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getTokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "giankyToken", "outputs": [{ "internalType": "contract ICustomERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_referralId", "type": "uint256" }], "name": "mintBasic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintBasic_without_id", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_referralId", "type": "uint256" }], "name": "mintDiamond", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintDiamond_without_id", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_referralId", "type": "uint256" }], "name": "mintPremium", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintPremium_without_id", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_referralId", "type": "uint256" }], "name": "mintStandard", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintStandard_without_id", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_referralId", "type": "uint256" }], "name": "mintStarter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintStarter_without_id", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenType", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mintToalpha", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_referralId", "type": "uint256" }], "name": "mintVIP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintVIP_without_id", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftReferrals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pancakeSwapFactory", "outputs": [{ "internalType": "contract IPancakeSwapFactory", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pancakeSwapRouter", "outputs": [{ "internalType": "contract IPancakeSwapRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "referralCounts", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "referralCountsbasic", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "referralCountsdiamond", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "referralCountspremium", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "referralCountsstandard", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "referralCountsstarter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "referralCountsvip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "referralPercentages", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "setBASIC_r", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "setDIAMOND_r", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newRate", "type": "uint256" }], "name": "setGiankyRewardRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "_owner", "type": "address" }], "name": "setOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "setPREMIUM_r", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "setSTANDARD_r", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "setSTARTER_r", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "setVIP_r", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "splitter", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "wbnbToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "whitelistAddress_alpha", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "recipient", "type": "address" }], "name": "withdrawBNB", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

    // const { contract, isLoading, error } = useContract(
    //     "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898",
    //     abi,
    // );

    // const address = useAddress();
    const contractAddress = "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898";
    const { contract } = useContract(
        "0xF2fE314bA778b1455b5393af9b69C9a85B80E6BF"
    );

    // const { data, isLoading: ownIsLoading, error: ownIserror } = useOwnedNFTs(contract, address,);

    const [mydata, setmydata] = useState<any>();
    async function stakeNft(id: string) {
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

    const [count, setcount] = useState(1);
    // const { contract } = useContract(contractAddress);
    const { data, isLoading: DisLoading, error: Derror } = useNFTs(contract);
    // const { data, isLoading: DisLoading, error: Derror } = useNFT(contract, count);
    // const { data, isLoading: StarterisLoading } = useContractRead(
    //     contract,
    //     "ownerOf",
    //     count
    // );

    console.log("data is ")
    console.log(data)

    // async function loadStartee() {
    //     for (let i = 1; i < 100; i++) {
    //         const { data, isLoading: DisLoading, error: Derror } = useNFT(contract, i);
    //     }
    // }
    //   ---------
    useEffect(() => {
        if (!address)
            return

        // async function loadStartee() {
        //     for (let i = 1; i < 500; i++) {
        //         setcount((prevCount) => prevCount + 1);
        //     }
        // }

        // loadStartee();



        // return () => {
        //     clearTimeout(timer); // Clear the timeout on component unmount
        // };
    }, []);


    //   ---------
    // useEffect(() => {
    //     if (!contract) return;

    //     async function loadStakedCatNfts() {
    //         const stakedTokens = await contract?.call("getStakedTokens", address);

    //         const stakedCatNfts1 = await Promise.all(
    //             stakedTokens?.map(
    //                 async (stakedToken: { staker: string; tokenId: BigNumber }) => {
    //                     if (stakedToken.tokenId) {
    //                         const as = stakedToken.tokenId.toNumber();
    //                         if (as != 0) {
    //                             const nft = await nftCatDropContract?.get(stakedToken.tokenId);
    //                             return nft;
    //                         }
    //                     }
    //                 }
    //             )
    //         );

    //         setStakedCatNfts(stakedCatNfts1);
    //         console.log("setstakedHorseNfts", stakedCatNfts1);
    //     }

    //     if (address) {
    //         loadStakedCatNfts();
    //     }
    // }, [address, contract, nftCatDropContract]);


    // useEffect(() => {
    //     if (!contract || !address) return;

    //     async function loadClaimableRewards() {
    //         var cr = await contract?.call("availableRewards", address);
    //         console.log("Loaded claimable rewards", cr);
    //         setClaimableRewards(cr);
    //     }

    //     loadClaimableRewards();
    // }, [address, contract]);



    const { contract: stakecontract } = useContract("0xF2fE314bA778b1455b5393af9b69C9a85B80E6BF");
    const { mutateAsync: withdraw, isLoading } = useContractWrite(stakecontract, "withdraw")

    const Widhraw = async (id) => {
        try {
            console.log("widraw id is " + id)
            const data = await withdraw([id]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    async function claimRewards() {
        const claim = await contract?.call("claimRewards");
    }

    // if (isLoading) {
    //     return (
    //         <div className="stake loadingstake">

    //             <Header />

    //             <div className="loading">Loading</div>
    //         </div>
    //     )
    // }
    const tokenContractAddress = "0x370806781689E670f85311700445449aC7C3Ff7a";

    const { contract: tokenContract } = useContract(
        tokenContractAddress,
        "token"
    );
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);

    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
    useEffect(() => {
        if (!contract || !address) return;

        async function loadClaimableRewards() {
            var cr = await contract?.call("availableRewards", address);
            // cr = cr * 100;
            // cr = cr.toString();
            console.log("Loaded claimable rewards", cr);
            setClaimableRewards(cr);
        }
        loadClaimableRewards();
    }, [address]);
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
                                            {/* : ethers.utils.formatUnits(claimableRewards, 11)} */}
                                            {/* :
                       ethers.utils.mul} */}
                                            {/* } */}
                                        </b>{" "}

                                    </p>
                                </div>
                                <div className={styles.tokenItem}>
                                    <h3 className={styles.tokenLabel}>Your Gianky Balance</h3>
                                    <p className={styles.tokenValue}>
                                        <b>
                                            <b>{tokenBalance?.displayValue.substring(0, 4)}</b>
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
                                <h2 className="uc">Your UnStaked NFTs</h2>
                            </div>

                            <LoggedIn />

                            {/* <div className="iframe-container">
                                <iframe
                                    width="100%"
                                    // height="100vh"
                                    frameBorder="0"
                                    id="stake-unskta"

                                    allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
                                    src="https://sweet-medovik-e5ac21.netlify.app/"
                                    scrolling="no"
                                ></iframe>
                            </div> */}
                            {/* <div className={styles.nftBoxGrid}>
                                {data?.map((nft) => (
                                    <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                                        <ThirdwebNftMedia
                                            metadata={nft.metadata}
                                            className={styles.nftMedia}
                                        />
                                        <h3>{nft.metadata.name}</h3>

                                    </div>
                                ))}
                            </div> */}

                            <div className={styles.buttonContainer}>   <h2 className="uc">Your Staked NFTs</h2> </div>

                            <div>
                                <div className={styles.nftBoxGrid + " " + styles.imgcenter}>
                                    {stakedNfts?.map((nft: any) => (
                                        <div className="console log" key="12">
                                            {nft ? (
                                                <div
                                                    className={styles.nftBox}
                                                    key={nft.metadata.id.toString()}
                                                >
                                                    {console.log("token id is " + nft.metadata.id)}

                                                    <h3>{nft.metadata.name}</h3>
                                                    <ThirdwebNftMedia
                                                        metadata={nft.metadata}
                                                        className={styles.nftMedia}
                                                    />


                                                    <Web3Button
                                                        contractAddress="0xF2fE314bA778b1455b5393af9b69C9a85B80E6BF"
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
                            </div>

                            <div className="image-grid">
                                <div>
                                    {/* <div className="component">
                                        {
                                            !DisLoading ?
                                                <>
                                                    <div className="insidedata">
                                                        <img src="https://itishstudios.net/assert/ezgif.com-video-to-gif.gif" alt="" className="nft-img" />
                                                        <div>
                                                            <br />
                                                            Token Id is :     {count}
                                                        </div>
                                                    </div>

                                                </>
                                                :
                                                <div> loading </div>

                                        }
                                    </div> */}

                                </div>
                                <div>
                                    {/* <div className="component">
                                        <Basic />
                                    </div>
                                </div>
                                <div>
                                    <div className="component">
                                        <Standard />
                                    </div>
                                </div>
                                <div>
                                    <div className="component">
                                        <Vip />
                                    </div>
                                </div>
                                <div>
                                    <div className="component">
                                        <Premium />
                                    </div>
                                </div>
                                <div>
                                    <div className="component">
                                        <Diamond />
                                    </div> */}
                                </div>
                            </div>


                            {/* <div className={styles.nftBoxGrid}>
                                {data?.map((nft) => (
                                    <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                                        <ThirdwebNftMedia
                                            metadata={nft.metadata}
                                            className={styles.nftMedia}
                                        />
                                        <h3>{nft.metadata.name}</h3>
                                        <button
                                            // contractAddress={stakingContractAddress}
                                            className={`${styles.mainButton} ${styles.spacerTop}`}
                                            onClick={() => stakeNft(nft.metadata.id)}
                                        >
                                            Stake
                                        </button>
                                    </div>
                                ))}
                            </div> */}

                            {/* <MainSwap /> */}
                            {/* ---- for Cat ---- */}
                            {/* {selectval === "0x06a9C40FB3581682448277a9EF3D4DBFfcc606e7" ? (
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
                            } */}

                        </div>
                    )}
                </div>
            </div>

        </>
    );
};

export default Stake;
