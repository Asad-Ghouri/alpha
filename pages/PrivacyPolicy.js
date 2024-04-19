import React from 'react';
import styles from '../styles/Home.module.css'; // Your CSS module
import { Header } from "../components/Header";
import Footer from "./Footer";
const PrivacyPolicy = () => {
  return (
    <>
    {/* <Header /> */}
    <div className={styles.containert}>
      <h1 className={styles.titlet}>Privacy Policy</h1>
      <div className={styles.contentt}>
        <p><strong>Privacy Policy</strong></p>
        <p>A privacy policy is a statement that discloses some or all of the ways a website collects, uses, discloses, and manages the data of its visitors and customers. It fulfills a legal requirement to protect a visitor or client's privacy.</p>
       
        <p>Countries have their own laws with different requirements per jurisdiction regarding the use of privacy policies. Make sure you are following the legislation relevant to your activities and location.</p>
        <p><strong>In general, what should you cover in your Privacy Policy?</strong></p>
        <br />
        <p><strong>What type of information do you collect?</strong></p>
        <p><strong>How do you collect information?</strong></p>
        <p><strong>How do you store, use, share and disclose your site visitors' personal information?</strong></p>
        <p><strong>How (and if) do you communicate with your site visitors?</strong></p>

        <p><strong>Is your service targeting and collecting information from Minors?</strong></p>
        <p>Privacy policy updates</p>
        <p>Contact Information</p>
        <p>You can check out this support article to receive more information about how to create a privacy policy
</p>

        <p>The explanations and information provided herein are only general explanations, information and samples. You should not rely on this article as legal advice or as recommendations regarding what you should actually do. We recommend that you seek legal advice to help you understand and to assist you in the creation of your privacy policy.
</p>
       

        <p className={styles.contactt}>
          For more information about creating a privacy policy, you can contact us at <a href="mailto:info@giankycoin.com" className={styles.linkt}>info@giankycoin.com</a>.
        </p>
      </div>
    </div>
    <div className='foottert'>  <Footer/></div>
    </>
  );
};

export default PrivacyPolicy;
