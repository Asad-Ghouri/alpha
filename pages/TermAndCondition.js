import React from 'react';
import styles from '../styles/Home.module.css'; // Your CSS module
import { Header } from "../components/Header";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <>
    {/* <Header /> */}
    <div className={styles.containert}>
      <h1 className={styles.titlet}>Terms & Conditions</h1>
      <div className={styles.contentt}>
        <p><strong>NFT Ownership Disclaimer</strong></p>
        <p>The purchaser of the NFT understands, acknowledges, and agrees that it is acquiring title to it solely for personal, non-commercial purposes, and that it shall have no authority, right, title or interest in, to or in connection with the underlying copyrights, trademarks or other intellectual property or proprietary rights in and to the NFT, all of which remain solely and absolutely with the seller. In addition to the foregoing, the purchaser of the NFT understands, acknowledges, and agrees that it has no rights of reproduction or commercial exploitation of the NFT or the underlying copyrights, trademarks or other intellectual property or proprietary rights in and to the NFT, other than the right to sell, trade, donate, give away, or transfer the NFT itself. If at any time you sell, trade, donate, give away, or transfer the NFT to a new owner, title to the NFT shall be transferred to that new owner in accordance with the terms hereof, and you will have no further rights in or to the NFT.</p>
        <p><strong>Intellectual Property</strong></p>
        <p>Amaurot Capital NFT intellectual property including but not limited to its brand, characters, story and developments is solely owned by its creators.</p>     
        <p><strong>Awareness of Risks</strong></p>
       <p>You warrant that you understand that NFTs and cryptocurrency token projects are inherently highly risky and extremely speculative. They are unregulated, in an early stage of development, with experimental software and business models, no governmental protection of your investment, dramatic price volatility, the strong potential for inadequate documentation, and a high risk of fraud.</p>
        <p>You should only invest in NFT or cryptocurrency token projects if you have substantial technical knowledge and understand the specifics of the offering. Careful due diligence should be undertaken on the projects, network, tokens, and team behind any NFT or token sale. You must understand that your and others’ investments may not result in a usable or valuable NFT or token and you may lose the entire value of your investmen</p>
        
        <p><strong>You warrant that you understand that this list includes all possible risks:</strong></p>
        <br />
        <p><strong>1) Limitations of Liability for Gas, Failed Transactions, Smart Contract Bugs</strong></p>
        <p>Participants in minting Amaurot Capital NFTs agree to hold the project Creative Team harmless for any losses incurred as a consequence of minting an NFT. These potential losses include any gas fees for failed transactions, any excessive gas fees charged due to website or smart contract bugs, and any loss of any NFT due to website or smart contract bugs.</p>

        <p><strong>2) No Guarantees or Future Promises</strong></p>
        <p>While the Gianky Coin Team has released a roadmap outlining future goals and plans for community development, we cannot guarantee to accomplish every item outlined during the pre-launch planning phase as ideas and projects evolve organically. You agree that your purchase of a Amaurot Capital NFT is all you are guaranteed to receive with your initial purchase, whether through primary or secondary channels. Any future benefits are ancillary to this purchase and not to be taken into consideration with your initial purchase. You agree that you are not relying on any future commitments by Gianky Coin Team in participating in our NFT launch.
        </p>

        <p><strong>3) No Guarantees of Value</strong></p>
        <p>
        Amaurot Capital NFTs were created purely as collectibles, not as investment vehicles or substitutes for cryptocurrency. We make absolutely no promise or guarantee that these NFTs will subsequently retain monetary value in fiat, cash or cryptocurrency.
        </p>

        
        <p><strong>4) Taxes</strong></p>
        <p>
      
Each Holder is solely and entirely responsible for any and all Federal or State tax liabilities which may arise, be imposed, or enforced by the holder's country of residence as a result of minting or reselling Amaurot Capital NFTs.
        </p>

        <p className={styles.contactt}>
          For further information regarding the Amaurot Capital NFT sale, please contact <a href="mailto:info@giankycoin.com" className={styles.linkt}>info@giankycoin.com</a>.
        </p>
      </div>
    </div>
  <div className='foottert'>  <Footer/></div>
    </>
  );
};

export default TermsAndConditions;
