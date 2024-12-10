import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Card from "./card";
import { useAddress } from "@thirdweb-dev/react";

export default function GetNfts(props) {
  const [nfts, setNfts] = useState([]);
  const address = useAddress();
  const chain = "0x89";

  useEffect(() => {
    // Fetch NFTs only once when the component mounts
    async function getData() {
      try {
        const response = await axios.get(`https://alphabackened.vercel.app/getnfts`, {
          params: { address, chain },
        });
        setNfts(response.data.result); // Assuming the response contains a 'result' field with NFTs
        console.log("Fetched NFTs:", response.data.result);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    }

    getData();  // Call the function to fetch NFTs
  }, [address]); // Empty dependency array to call only once on mount

  return (
    <>
      {nfts.length > 0 ? (
        <section className={styles.dataContainer}>
          {nfts.map((nft) => {
            // Filter NFTs based on conditions like token_id, min/max value, and symbol
            return (
              nft.token_id > props.minvalue &&
              nft.token_id < props.maxvalue &&
              nft.symbol === "GK" && (
                <Card
                  key={nft.token_id} // Use token_id as key
                  uri={nft} // Assuming token_uri is where the metadata is located
                  id={nft.token_id}
                  stakingContractAddres={props.stakingContractAddres}
                />
                
              )
            );
          })}
        </section>
      ) : (
        <p>No NFTs found!</p> // Optionally show a message if no NFTs are found
      )}
    </>
  );
}