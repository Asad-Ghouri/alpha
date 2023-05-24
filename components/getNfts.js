import { useAccount } from "wagmi";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Card from "./card.js";
import { useAddress } from "@thirdweb-dev/react";

export default function getNfts() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
        .get(`https://fetchnft-1--asadghouri.repl.co/getnfts`, {
          params: { address, chain },
        })
        .then((response) => {
          setNfts(response.data.result);
          console.log("ids are ");
          // console.log(response.data.result[0].token_id);
          // console.log(response);
        });
    }
    getData();
  }, []);

  return (
    <>
      {nfts.length > 0 ? (
        <section className={styles.dataContainer}>
          {nfts.map((nft) => {
            return (
              nft.metadata && (
                <Card uri={nft} id={nft.token_id} key={nft.token_uri} />
              )
            );
          })}
        </section>
      ) : (
        <h3>You do not have any nft</h3>
      )}
    </>
  );
}
