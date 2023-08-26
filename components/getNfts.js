// import { useAccount } from "wagmi";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Card from "./card.js";
import { useAddress } from "@thirdweb-dev/react";

export default function getNfts(props) {
  console.log(
    "in getnfts in " +
      props.stakingContractAddres +
      " " +
      props.minvalue +
      " " +
      props.maxvalue
  );
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

  return (
    <>
      {nfts.length > 0 ? (
        <section className={styles.dataContainer}>
          {nfts.map((nft) => {
            return (
              nft.metadata &&
              nft.token_id > props.minvalue  &&
              nft.token_id < props.maxvalue &&
                (
                    nft.token_address === "0xdc91E2fD661E88a9a1bcB1c826B5579232fc9898"?
                    <Card
                      uri={nft}
                      id={nft.token_id}
                      key={nft.token_uri}
                      stakingContractAddres={props.stakingContractAddres}
                    />
                    :
                    undefined
               
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
