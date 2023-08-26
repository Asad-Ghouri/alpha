import styles from "../styles/Home.module.css";
import GetNfts from "./getNfts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContract, useAddress } from "@thirdweb-dev/react";
import Card from "./card.js";
import { Web3Button } from "@thirdweb-dev/react";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function LoggedIn(props) {
  const [nfts, setNfts] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const address = useAddress();
  const chain = "0x89";

  console.log("nfts are");
  console.log(nfts);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let response;
    async function getData() {
      response = await axios
        .get(`https://backened-asad-ghouri.vercel.app/getnfts`, {
          params: { address, chain },
        })
        .then((response) => {
          setNfts(response.data.result);
          console.log("ids are ");
        });
    }
    getData();
  }, []);


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

  // <Card
  //                 uri={nft}
  //                 id={nft.token_id}
  //                 key={nft.token_uri}
  //                 stakingContractAddres={props.stakingContractAddres}
  //               />
  return (
    <section className={styles.loggedInMain}>
      <section className={styles.loggedInAccount}>
        {/* <GetNfts
          stakingContractAddres={props.stakingContractAddres}
          minvalue={props.minvalue}
          maxvalue={props.maxvalue}
        /> */}
        {nfts.length > 0 ? (
        <section className={styles.dataContainer}>
          {nfts.map((nft) => {
            return (
              nft.metadata &&
              nft.token_id > props.minvalue - 1 &&
              nft.token_id < props.maxvalue && (
                
      <section className={styles.cardContainer}>
      {nft?.name ? <h1>{nft.name}</h1> : <h1>No NFT title can be shown.</h1>}
      {nftImage ? <img src={nftImage} /> : <p>No NFT image can be shown.</p>}
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
              )
            );
          })}
        </section>
      ) : (
        <h3>You do not have any nft</h3>
      )}
      </section>
    </section>
  );
}
