
import { useState } from "react";
import styles from "../styles/Home.module.css";

import { Web3Button } from "@thirdweb-dev/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContract, useAddress } from "@thirdweb-dev/react";

export default function Card(props) {
  const address = useAddress();

  console.log(
    "in cards in type of staking address is " +
      typeof props.stakingContractAddres +
      " " +
      props.stakingContractAddres +
      "id type is " +
      typeof props.id +
      "id is " +
      props.id
  );

  const stakingContractAddress = props.stakingContractAddres;

  const [nft, setNft] = useState(JSON.parse(props.uri.metadata));

  const [nftImage, setNftImage] = useState(() => {
    if (nft?.image) {
      return nft.image.includes("ipfs")
        ? `https://ipfs.io/ipfs/${nft.image.split("ipfs://")[1]}`
        : nft.image.split("\\")[0];
    }
  });

  const handleCopyClick = () => {
    navigator.clipboard.writeText(props.id);
    document.execCommand("copy");

    toast.success(`Text copied: ${props.id}`);
  };

  const nftDropContractAddress = "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898";
  const { contract, isLoading } = useContract(props.stakingContractAddres);
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  async function stakeNft() {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [[props.id]]);
    window.location.reload();
  }
  return (
    <section className={styles.cardContainer}>
    {/* Display NFT name based on ID ranges */}
    {props.id ? (
      <>
        {props.id >= 0 && props.id <= 1000000 ? (
          <h1>Starter</h1>
        ) : props.id >= 1000001 && props.id <= 2000000 ? (
          <h1>Basic</h1>
        ) : props.id >= 2000001 && props.id <= 3000000 ? (
          <h1>Standard</h1>
        ) : props.id >= 3000001 && props.id <= 4000000 ? (
          <h1>VIP</h1>
        ) : props.id >= 4000001 && props.id <= 5000000 ? (
          <h1>Premium</h1>
        ) : props.id >= 5000001 && props.id <= 6000000 ? (
          <h1>Diamond</h1>
        ) : (
          <h1>No NFT title can be shown.</h1>
        )}
      </>
    ) : (
      <h1>No NFT title can be shown.</h1>
    )}
  
    {/* Display NFT image based on ID ranges */}
    {props.id ? (
      <>
        {props.id >= 0 && props.id <= 1000000 ? (
          <img src="https://giankycoin.com/wp-content/uploads/2024/04/starter.gif" alt="Starter" />
        ) : props.id >= 1000001 && props.id <= 2000000 ? (
          <img src="https://giankycoin.com/wp-content/uploads/2024/04/baicgk.gif" alt="Basic" />
        ) : props.id >= 2000001 && props.id <= 3000000 ? (
          <img src="https://giankycoin.com/wp-content/uploads/2024/04/standardgk.gif" alt="Standard" />
        ) : props.id >= 3000001 && props.id <= 4000000 ? (
          <img src="https://giankycoin.com/wp-content/uploads/2024/04/vipgk.gif" alt="VIP" />
        ) : props.id >= 4000001 && props.id <= 5000000 ? (
          <img src="https://giankycoin.com/wp-content/uploads/2024/04/piem.gif" alt="Premium" />
        ) : props.id >= 5000001 && props.id <= 6000000 ? (
          <img src="https://giankycoin.com/wp-content/uploads/2024/04/diamondet.gif" alt="Diamond" />
        ) : (
          <p>No NFT image can be shown.</p>
        )}
      </>
    ) : (
      <p>No NFT image can be shown.</p>
    )}
  
    {/* Display ID if available */}
    {props.id ? (
      <h3 onClick={handleCopyClick}>id is : {props.id}</h3>
    ) : (
      <p>No id can be shown.</p>
    )}
  
    <ToastContainer />
  
    <br />
    <Web3Button
      contractAddress={props.stakingContractAddres}
      action={() => {
        stakeNft();
      }}
    >
      stake
    </Web3Button>
  </section>
  
  );
}
