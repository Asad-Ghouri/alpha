import { useState, useRef } from "react";
import styles from "../styles/Home.module.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {
  const [nft, setNft] = useState(JSON.parse(props.uri.metadata));
  const [nftImage, setNftImage] = useState(() => {
    if (nft?.image) {
      return nft.image.includes("ipfs")
        ? `https://ipfs.io/ipfs/${nft.image.split("ipfs://")[1]}`
        : nft.image.split("\\")[0];
    }
  });

  const handleCopyClick = () => {
    navigator.clipboard.writeText(props.id)
    document.execCommand('copy');

    toast.success(`Text copied: ${props.id}`);

  };


  return (
    <section className={styles.cardContainer}>
      {nft?.name ? <h1>{nft.name}</h1> : <h1>No NFT title can be shown.</h1>}
      {nftImage ? <img src={nftImage} /> : <p>No NFT image can be shown.</p>}
      {props.id ? <h3 onClick={handleCopyClick}>id is : {props.id}</h3> : <p>No id can be shown.</p>}
      <ToastContainer />
    </section>
  );
}
