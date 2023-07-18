import styles from "../styles/Home.module.css";
import GetNfts from "./getNfts";

export default function LoggedIn(props) {
  console.log(
    "in log in " +
      props.stakingContractAddres +
      " " +
      props.minvalue +
      " " +
      props.maxvalue
  );
  return (
    <section className={styles.loggedInMain}>
      <section className={styles.loggedInAccount}>
        <GetNfts
          stakingContractAddres={props.stakingContractAddres}
          minvalue={props.minvalue}
          maxvalue={props.maxvalue}
        />
      </section>
    </section>
  );
}
