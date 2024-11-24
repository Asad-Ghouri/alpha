import ezgifcom from "../public/assert/ezgif.com-video-to-gif.gif";
import two from "../public/assert/2.gif";
import three from "../public/assert/3.gif";
import four from "../public/assert/4.gif";
import five from "../public/assert/five.gif";
import six from "../public/assert/6.gif";
import Image from "next/image";
import Footer from "./Footer";
import alphaImg from "../public/assert/alpha.jpeg"
import { Header } from "../components/Header";
import { SetStateAction, useState } from "react";
import { ethers } from "ethers";
import Model from "../components/Model";
import NFTCard from "../components/NFTCards";
import NFTCard1 from "../components/NFTCard1";

import Link from "next/link";


import {
  useContract,
  useContractWrite,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";

function Mint(props) {
  const [ListingValue, setListingValue] = useState("200");
  const [selectedOption, setSelectedOption] = useState("option1");

  const [changeLan, setchangeLan] = useState(props.changeLan);

  const [showModal, setShowModal] = useState(false);

  console.log("change is " + props.changeLan);
  const person = {
    name: "Alpha",
    age: "Owner and Founder",
    occupation:
      "I'm Enrico, also known as Alpha, founder and CEO of Gianky Coin, a technological startup aiming to create innovative products for the financial, blockchain and internet service provision sectors in general. I have a long standing experience in computing and a master's degree in business management, so I have done several projects in the field of internet service provision and traditional business consultancy. I started my business with Gianky Coin to provide innovative technological solutions that can contribute to the growth of the financial sector, knowledge of blockchain and DeFi (decentralized finance). We have developed an easy-to-use and accessible NFT platform, but also a matic polygon token that I hope will become a beneficial payment and investment tool for our supporters (holders), In addition, we are working on other blockchain-based products to help people understand, invest and benefit from the rapidly evolving technological environment. We hope that our platform will contribute to the spread of the blockchain & DeFi-based financial culture and to the growth of the global economy.",
  };

  const person_i = {
    name: "Alpha",
    age: "Owner and Founder",
    occupation:
      "Ho un esperienza  pluriventennale in informatica ed un master in gestione aziendale, quindi ho fatto diversi progetti nel campo della fornitura servizi internet e consulenza aziendale tradizionale . Ho iniziato la mia attività con Gianky Coin per offrire soluzioni tecnologiche innovative che possano contribuire alla crescita del settore finanziario , conoscenza della blockchain e della DeFi (finanza decentralizzata) . Abbiamo sviluppato una piattaforma di NFT facile da usare e accessibile a tutti , ma anche un token matic polygon che spero diventi uno strumento di pagamento e investimento vantaggioso per i nostri sostenitori ( holder ) ,Inoltre, stiamo lavorando su altri prodotti basati su blockchain per aiutare le persone a capire, investire e trarre vantaggio dall'ambiente tecnologico in rapida evoluzione. Con l'aiuto della nostra squadra di esperti, abbiamo creato un prodotto che è allo stesso tempo semplice da usare per chi non ha esperienza in questo settore e potente per gli utenti esperti.",
  };

  const person1 = {
    name: "ONJI",
    age: "Chief Technical Officer",
    occupation:
      "With over 100 successful crypto token creations under his belt, he has a deep understanding of the technical and practical aspects of blockchain and its related applications. One of our most experienced and knowledgeable team members, he specializes in smart contracts, a key technology that underpins blockchain and enables the creation of decentralized applications. His expertise in smart contracts has helped many clients build robust and secure systems on top of blockchain, and he is always pushing the boundaries of what’s possible in this exciting and rapidly-evolving field. With a keen eye for detail and a passion for innovation, our blockchain and cryptocurrency expert is the go-to resource for anyone looking to explore the potential of blockchain and digital currencies. Whether you’re a seasoned investor, a startup looking to launch a new crypto token, or just curious about the technology behind this rapidly-growing industry, he’s the person you want on your side.",
  };

  const person1_i = {
    name: "ONJI",
    age: "Chief Technical Officer",
    occupation:
      "Uno dei membri più esperti e competenti del nostro team, si specializza nei contratti intelligenti, una tecnologia chiave che sostiene la blockchain e consente la creazione di applicazioni decentralizzate. La sua competenza in materia di contratti intelligenti ha aiutato molti clienti a creare sistemi robusti e sicuri sulla blockchain e lui è sempre alla ricerca di nuovi limiti del possibile in questo entusiasmante e rapidamente evolvente settore. Con un occhio acuto per i dettagli e una passione per l'innovazione, il nostro esperto di blockchain e criptovalute è la risorsa di riferimento per chiunque desideri esplorare il potenziale della blockchain e delle valute digitali. Che tu sia un investitore esperto, una startup che cerca di lanciare un nuovo token crittografico o semplicemente curioso della tecnologia dietro questo settore in rapida crescita, lui è la persona che vuoi al tuo fianco.",
  };

  const person2 = {
    name: "VINCENZO",
    age: "Senior Ambassador",
    occupation:
      "He has led the direction and management of computer and physics laboratories. He has developed specific skills as a team principal in managing teams in motorsports competitions, formula kart, formula azzurra, and formula three, where he has achieved various successes in the Italian championships. He has also directed the organization of events in various sailing and chess clubs.",
  };

  const person2_i = {
    name: "VINCENZO",
    age: "Senior Ambassador",
    occupation:
      " Ha sviluppato competenze specifiche come team principal nella gestione di squadre in competizioni motoristiche, formula kart, formula azzurra, formula tre in cui ha ottenuto svariati successi in campo agonistico nei campionati italiani. Ha inoltre diretto l'organizzazione di eventi in vari circoli sportivi velici e scacchistici.",
  };

  const person3 = {
    name: "Sirtre",
    age: "General Manager",
    occupation:
      "He started his career as a financial consultant at a prestigious bank, where he developed his skills in finance, risk management, and financial planning. After a few years, he took on the role of finance director and risk manager for a publicly listed company. Later, he held high-level positions in various investment firms and financial institutions. Currently, he is the general manager of a large software development company, where he is responsible for all aspects of financial management, from planning to risk management, and he is also the owner of high-profile hotel properties. Sirtre is actively involved in the community, attending numerous charity events and providing consulting to various non-profit organizations.",
  };

  const person3_i = {
    name: "Sirtre",
    age: "General Manager",
    occupation:
      "Ha iniziato la sua carriera come consulente finanziario presso una prestigiosa banca, dove ha sviluppato le proprie competenze nell'ambito della finanza, della gestione del rischio e della pianificazione finanziaria. Dopo alcuni anni, ha assunto il ruolo di direttore finanziario e responsabile della gestione del rischio per una società quotata in borsa. In seguito, ha ricoperto posizioni di alto livello in diverse società di investimento e istituti finanziari. Attualmente è il general manager di una grande società che sviluppa software , dove si occupa di tutti gli aspetti della gestione finanziaria, dalla pianificazione alla gestione dei rischi, inoltre è proprietario di strutture alberghiere di alto profilo . Sirtre è attivamente impegnato nella comunità, partecipando a numerosi eventi di beneficenza e fornendo consulenza a varie organizzazioni no profit.",
  };

  const person4 = {
    name: "MASSIMO",
    age: "Team Leader",
    occupation:
      "He has served as a consultant for companies of all sizes, both in the software and hardware domains. Massimo is able to quickly identify the customer’s needs and provide swift and effective solutions. He has a great passion for technology and a solid knowledge of his area of expertise. Massimo is a dedicated team leader who is constantly committed to the goal of bringing his team to success. He loves to share his knowledge with team members and encourages their professional growth. Massimo has a strong strategic vision and a deep understanding of business issues. He is an excellent communicator and a natural motivator.",
  };

  const person4_i = {
    name: "MASSIMO",
    age: "Team Leader",
    occupation:
      "Ha prestato servizio come consulente per aziende di tutte le dimensioni, sia nel settore software che in quello hardware.  Massimo è in grado di identificare rapidamente le esigenze del cliente e fornire soluzioni rapide ed efficaci.  Ha una grande passione per la tecnologia e una solida conoscenza della sua area di competenza.  Massimo è un team leader dedicato che è costantemente impegnato nell'obiettivo di portare la sua squadra al successo.  Ama condividere le sue conoscenze con i membri del team e incoraggia la loro crescita professionale.  Massimo ha una forte visione strategica e una profonda conoscenza delle problematiche aziendali.  È un eccellente comunicatore e un motivatore naturale.",
  };

  const person5 = {
    name: "Eugenio",
    age: "International Ambassador",
    occupation:
      "He has obtained a license to conduct competitions in karting, track racing, Formula Azzurra, and Formula Three. He has participated in national and international championships, winning at regional and national levels. Sirtre is an experienced financial sector general manager with over 25 years of experience. He holds a degree in Business Economics and has a master’s degree in Finance. He started his career as a financial consultant at a prestigious bank, where he developed his skills in finance, risk management, and financial planning. After a few years, he took on the role of finance director and risk manager for a publicly listed company. Later, he held high-level positions in various investment firms and financial institutions. Currently, he is the general manager of a large software development company, where he is responsible for all aspects of financial management, from planning to risk management, and he is also the owner of high-profile hotel properties. Sirtre is actively involved in the community, attending numerous charity events and providing consulting to various non-profit organizations. Giancarlo Marketing Director Giancarlo is a seasoned professional in marketing and communication. He has spent many years in the financial technology sector, working with leading global companies.",
  };

  const person5_i = {
    name: "Eugenio",
    age: "International Ambassador",
    occupation:
      "Eugenio Palmeri laureato in ingegneria meccanica lavora in una azienda svizzera che si occupa di verifiche e controlli di macchine e dei relativi componenti meccanici. Ha conseguito la licenza di conduttore nelle competizioni sportive di karting, automobilismo su pista, formula azzurra e formula tre. Ha partecipato a campionati nazionali e internazionali vincendone a livello regionale e nazionale. Eurgenio",
  };

  const person6 = {
    name: "Giancarlo",
    age: "Marketing Director",
    occupation:
      "He has always had a passion for technology and innovation, and this led him to join the Giankycoin project as the Marketing Director. With his extensive knowledge of the financial sector and innovative technologies, Giancarlo is able to develop and implement effective marketing strategies to promote Giankycoin globally. His goal is to make cryptocurrency known to an increasingly wider audience and make the world of cryptocurrencies accessible to everyone. Giancarlo is known for his communication and leadership skills, and these qualities allow him to work closely with the Giankycoin team to achieve the project’s long-term goals. Thanks to his experience and abilities, Giancarlo is a valuable asset to the Giankycoin team and a strong representative of the cryptocurrency to the public and stakeholders. We are confident that his contribution will be key to the success of Giankycoin.",
  };

  const person6_i = {
    name: "Giancarlo",
    age: "Marketing Director",
    occupation:
      "Da sempre appassionato di tecnologia e innovazione, questo lo ha portato ad entrare a far parte del progetto Giankycoin come Direttore Marketing.  Con la sua vasta conoscenza del settore finanziario e delle tecnologie innovative, Giancarlo è in grado di sviluppare e implementare efficaci strategie di marketing per promuovere Giankycoin a livello globale.  Il suo obiettivo è far conoscere le criptovalute a un pubblico sempre più vasto e rendere il mondo delle criptovalute accessibile a tutti.  Giancarlo è noto per le sue capacità comunicative e di leadership, e queste qualità gli consentono di lavorare a stretto contatto con il team di Giankycoin per raggiungere gli obiettivi a lungo termine del progetto.  Grazie alla sua esperienza e capacità, Giancarlo è una risorsa preziosa per il team Giankycoin e un forte rappresentante della criptovaluta per il pubblico e le parti interessate.  Siamo fiduciosi che il suo contributo sarà la chiave del successo di Giankycoin.",
  };

  const person7 = {
    name: "M. Osama",
    age: "E-commerce and Support.",
    occupation:
      "He have experience in e-commerce over a year. He have served multiple companies with my services . I can understand the need of customers and help in it . Usama is dedicated team worker who tries his best to provide solution. He loves to share his knowledge and a good team member.",
  };

  const person7_i = {
    name: "M. Osama",
    age: "E-commerce and Support.",
    occupation:
      "Ha esperienza nell'e-commerce da oltre un anno. Ha servito diverse aziende con i miei servizi. Posso capire la necessità dei clienti e aiutarli. Usama è un lavoratore di squadra dedicato che fa del suo meglio per fornire una soluzione. Ama condividere le sue conoscenze ed è un buon membro del team.",
  };

  const handleClose = () => {
    setShowModal(false);
    setReadmore(false);
    setReadmore1(false);
    setReadmore2(false);
    setReadmore3(false);
    setReadmore4(false);
    setReadmore5(false);
    setReadmore6(false);
    setReadmore7(false);
  };

  const [readmore, setReadmore] = useState(false);
  const [readmore1, setReadmore1] = useState(false);
  const [readmore2, setReadmore2] = useState(false);
  const [readmore3, setReadmore3] = useState(false);
  const [readmore4, setReadmore4] = useState(false);
  const [readmore5, setReadmore5] = useState(false);
  const [readmore6, setReadmore6] = useState(false);
  const [readmore7, setReadmore7] = useState(false);

  console.log("read more is " + readmore);

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  const { contract } = useContract(
    "0x5c178b13293411634911ea292a1cdf931629fae7"
  );
  const { mutateAsync: mintStarter_without_id, isLoading } = useContractWrite(
    contract,
    "mintStarter_without_id"
  );

  const call = async () => {
    try {
      const data = await mintStarter_without_id();
      console.info("contract call successs", data);
      alert("successful data is " + data);
    } catch (err) {
      console.error("contract call failure", err);
      alert("erroe is" + err);
    }
  };

  const address = useAddress();

  return (
    <>
      <div className="mint">
        {/* <Header /> */}
        <div className="banner">
          <section
            className="elementor-section elementor-element elementor-element-56830d7 elementor-section-boxed elementor-section-items-middle"
            data-element_type="section"
          >
            <div
              className="elementor-shape elementor-shape-bottom"
              data-negative="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  d="M0,6V0h1000v100L0,6z"
                ></path>
              </svg>
            </div>
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-columnmm  elementor-col-100 elementor-element elementor-element-59cb1d2"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section
                    className="elementor-section elementor-element elementor-element-01caaad elementor-section-boxed"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-50 elementor-element elementor-element-fd20222"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-7558103 elementor-hidden-mobile elementor-widget"
                            data-element_type="widget"
                          >
                            <div className="elementor-widget-container">
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                      /*! elementor - v3.11.5 - 14-03-2023 */\n                      .elementor-column .elementor-spacer-inner{\n                        height:var(--spacer-size)}\n                      .e-con{\n                        --container-widget-width:100%}\n                      .e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{\n                        width:var(--container-widget-width,var(--spacer-size));\n                        --align-self:var(--container-widget-align-self,initial);\n                        --flex-shrink:0}\n                      .e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{\n                        height:100%}\n                      .e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{\n                        height:var(--container-widget-height,var(--spacer-size))}\n                    ",
                                }}
                              />
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner"></div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-29cb537 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                          >
                            <div className="elementor-widget-container">
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                      /*! elementor - v3.11.5 - 14-03-2023 */\n                      .elementor-heading-title{\n                        padding:0;\n                        margin:0;\n                        line-height:1}\n                      .elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{\n                        color:inherit;\n                        font-size:inherit;\n                        line-height:inherit}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-small{\n                        font-size:15px}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-medium{\n                        font-size:19px}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-large{\n                        font-size:29px}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-xl{\n                        font-size:39px}\n                      .elementor-widget-heading .elementor-heading-title.elementor-size-xxl{\n                        font-size:59px}\n                    ",
                                }}
                              />
                              {props.changeLan ? (
                                <h1 className="elementor-heading-title elementor-size-xxl changefont">
                                  MINT GIANKY
                                </h1>
                              ) : (
                                <h1 className="elementor-heading-title elementor-size-xxl changefont">
                                  MINT GIANKY
                                </h1>
                              )}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-8eea6b0 elementor-widget elementor-widget-heading"
                            data-element_type="widget"
                          >
                            <div className="elementor-widget-container">
                              {props.changeLan ? (
                                <h2 className="elementor-heading-title changefont">
                                  Collect this super rare NFT &amp; Digital
                                  Artwork
                                </h2>
                              ) : (
                                <h2 className="elementor-heading-title changefont">
                                  Colleziona questa rarissima opera d'arte NFT e
                                  digitale
                                </h2>
                              )}
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <Link href="/giankyAi">
                            <button
                                className="elementor-toggle-title"
                                
                              >
                               Gianky AI
                              </button>
                            
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-element elementor-element-ef4f1bd"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-56ff30a elementor-widget elementor-widget-image"
                            data-element_type="widget"
                          >
                            <div className="elementor-widget-container">
                              <img
                                width={300}
                                height={242}
                                src="https://pngimg.com/d/piggy_bank_PNG109.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <div className="mint-text">
          <h2>Gianky NFTs</h2>
        </div> */}

          <NFTCard />
          <NFTCard1 />
        {/* <div className="App">
          <div
            className="flex-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "5%",
              paddingLeft: "5%",
            }}
          >
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <img
                  src="https://sovanza.com/assert/1.gif"
                  alt="GIF 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  STARTER
                  <br />
                  (20POL)
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexd"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <img
                  src="https://sovanza.com/assert/2.gif"
                  alt="GIF 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="giftext">
                  Basic
                  <br />
                  (50POL)
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexd"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <img
                  src="https://sovanza.com/assert/3.gif"
                  alt="GIF 3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  STANDARD
                  <br />
                  (100POL)
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div
            className="flex-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "5%",
              paddingLeft: "5%",
            }}
          >
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexc"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <img
                  src="https://sovanza.com/assert/4.gif"
                  alt="GIF 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  VIP
                  <br />
                  (500POL)
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexc"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <img
                  src="https://sovanza.com/assert/5.gif"
                  alt="GIF 5"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  Premium
                  <br />
                  (1000POL)
                </div>
                <div></div>
              </div>
            </div>
            <div
              className={
                selectedOption === "option1" ? "flex pl" : "flex flexb flexc"
              }
            >
              <div
                style={{
                  margin: "0 10px",
                  padding: "10px",
                  width: "375px",
                  height: "290px",
                }}
              >
                <img
                  src="https://sovanza.com/assert/6.gif"
                  alt="GIF 3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="giftext">
                  DIAMOND
                  <br />
                  (5000POL)
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="readmore" id="team">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d8fb732 elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-xl">
                  Our Team
                </h1>
              </div>
            </div>
            <div className="elementor-element elementor-element-0d4f662 elementor-widget-divider--separator-type-pattern elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
              <div className="elementor-widget-container">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n        /*! elementor - v3.11.5 - 14-03-2023 */\n        .elementor-widget-divider{\n          --divider-border-style:none;\n          --divider-border-width:1px;\n          --divider-color:#2c2c2c;\n          --divider-icon-size:20px;\n          --divider-element-spacing:10px;\n          --divider-pattern-height:24px;\n          --divider-pattern-size:20px;\n          --divider-pattern-url:none;\n          --divider-pattern-repeat:repeat-x}\n        .elementor-widget-divider .elementor-divider{\n          display:flex}\n        .elementor-widget-divider .elementor-divider__text{\n          font-size:15px;\n          line-height:1;\n          max-width:95%}\n        .elementor-widget-divider .elementor-divider__element{\n          margin:0 var(--divider-element-spacing);\n          flex-shrink:0}\n        .elementor-widget-divider .elementor-icon{\n          font-size:var(--divider-icon-size)}\n        .elementor-widget-divider .elementor-divider-separator{\n          display:flex;\n          margin:0;\n          direction:ltr}\n        .elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{\n          align-items:center}\n        .elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{\n          display:block;\n          content:"";\n          border-bottom:0;\n          flex-grow:1;\n          border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}\n        .elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{\n          flex-grow:0;\n          flex-shrink:100}\n        .elementor-widget-divider--element-align-left .elementor-divider-separator:before{\n          content:none}\n        .elementor-widget-divider--element-align-left .elementor-divider__element{\n          margin-left:0}\n        .elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{\n          flex-grow:0;\n          flex-shrink:100}\n        .elementor-widget-divider--element-align-right .elementor-divider-separator:after{\n          content:none}\n        .elementor-widget-divider--element-align-right .elementor-divider__element{\n          margin-right:0}\n        .elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{\n          border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}\n        .elementor-widget-divider--separator-type-pattern{\n          --divider-border-style:none}\n        .elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{\n          width:100%;\n          min-height:var(--divider-pattern-height);\n          -webkit-mask-size:var(--divider-pattern-size) 100%;\n          mask-size:var(--divider-pattern-size) 100%;\n          -webkit-mask-repeat:var(--divider-pattern-repeat);\n          mask-repeat:var(--divider-pattern-repeat);\n          background-color:var(--divider-color);\n          -webkit-mask-image:var(--divider-pattern-url);\n          mask-image:var(--divider-pattern-url)}\n        .elementor-widget-divider--no-spacing{\n          --divider-pattern-size:auto}\n        .elementor-widget-divider--bg-round{\n          --divider-pattern-repeat:round}\n        .rtl .elementor-widget-divider .elementor-divider__text{\n          direction:rtl}\n        .e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{\n          width:var(--container-widget-width,100%);\n          --flex-grow:var(--container-widget-flex-grow)}\n      ',
                  }}
                />
                <div className="elementor-divider style-mSM1f" id="style-mSM1f">
                  <span className="elementor-divider-separator"></span>
                </div>
              </div>
            </div>
            <section className="elementor-section elementor-element elementor-element-b43337a elementor-section-boxed">
              <div className="elementor-container elementor-column-gap-custom">
                <div className="elementor-column elementor-col-25 elementor-element elementor-element-4c44812">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e9f5ee7 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://assets.codepen.io/1067579/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1&width=512"
                          className="t-img alphaimg"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-bc11f43 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">Alpha</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-24cf90e elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          Owner &amp; Founder
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d6b5de9 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                /*! elementor - v3.11.5 - 14-03-2023 */\n                .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{\n                  background-color:#818a91;\n                  color:#fff}\n                .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{\n                  color:#818a91;\n                  border:3px solid;\n                  background-color:transparent}\n                .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{\n                  margin-top:8px}\n                .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{\n                  width:1em;\n                  height:1em}\n                .elementor-widget-text-editor .elementor-drop-cap{\n                  float:left;\n                  text-align:center;\n                  line-height:1;\n                  font-size:50px}\n                .elementor-widget-text-editor .elementor-drop-cap-letter{\n                  display:inline-block}\n              ",
                          }}
                        />
                        {props.changeLan ? (
                          <p className="para para1">
                            {/* Im Enrico, also known as Alpha, founder and CEO of
                            Gianky Coin, a technological startup aiming to
                            create innovative products for the financial,
                            blockchain and internet service provision sectors in
                            general */}
                          </p>
                        ) : (
                          <p className="para para1">
                            {/* Sono Enrico alias Alpha , fondatore e CEO di Gianky
                            Coin, una startup tecnologica che mira a creare
                            prodotti innovativi per il settore finanziario ,
                            blockchain e fornitura servizi internet in generale. */}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8192d16 elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                /*! elementor - v3.11.5 - 14-03-2023 */\n                .elementor-toggle{\n                  text-align:left}\n                .elementor-toggle .elementor-tab-title{\n                  font-weight:700;\n                  line-height:1;\n                  margin:0;\n                  padding:15px;\n                  border-bottom:1px solid #d4d4d4;\n                  cursor:pointer;\n                  outline:none}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon{\n                  display:inline-block;\n                  width:1em}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon svg{\n                  -webkit-margin-start:-5px;\n                  margin-inline-start:-5px;\n                  width:1em;\n                  height:1em}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-right{\n                  float:right;\n                  text-align:right}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon.elementor-toggle-icon-left{\n                  float:left;\n                  text-align:left}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-closed{\n                  display:block}\n                .elementor-toggle .elementor-tab-title .elementor-toggle-icon .elementor-toggle-icon-opened{\n                  display:none}\n                .elementor-toggle .elementor-tab-title.elementor-active{\n                  border-bottom:none}\n                .elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-closed{\n                  display:none}\n                .elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon-opened{\n                  display:block}\n                .elementor-toggle .elementor-tab-content{\n                  padding:15px;\n                  border-bottom:1px solid #d4d4d4;\n                  display:none}\n                @media (max-width:767px){\n                  .elementor-toggle .elementor-tab-title{\n                    padding:12px}\n                  .elementor-toggle .elementor-tab-content{\n                    padding:12px 10px}\n                }\n                .e-con-inner>.elementor-widget-toggle,.e-con>.elementor-widget-toggle{\n                  width:var(--container-widget-width);\n                  --flex-grow:var(--container-widget-flex-grow)}\n              ",
                          }}
                        />
                        <div className="elementor-toggle elementor-toggle1">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => setShowModal(true)}
                              >
                                Read more
                              </button>

                              {props.changeLan ? (
                                <Model
                                  show={showModal}
                                  handleClose={handleClose}
                                  person={person}
                                />
                              ) : (
                                <Model
                                  show={showModal}
                                  handleClose={handleClose}
                                  person={person_i}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-element elementor-element-d969f74">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-29324f1 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/fotor_2023-3-29_19_23_31.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8631a6e elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">ONJI</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6652259 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          Chief Technical Officer
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7e3c9f3 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        {props.changeLan ? (
                          <p className="para para2_">
                            {/* Onji is our expert in blockchain and cryptocurrency,
                            who has helped clients from all over the world
                            navigate the complex world of digital currencies. */}
                          </p>
                        ) : (
                          <p className="para">
                            {/* Onji è il nostro esperto in blockchain e
                            criptovalute, che ha aiutato clienti di tutto il
                            mondo a orientarsi nel complesso mondo delle valute
                            digitali */}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-a69db37 elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title mt-2 mtt"
                                onClick={() => {
                                  setReadmore6(true);
                                }}
                              >
                                Read more
                              </button>
                              {props.changeLan ? (
                                <Model
                                  show={readmore6}
                                  handleClose={handleClose}
                                  person={person1}
                                />
                              ) : (
                                <Model
                                  show={readmore6}
                                  handleClose={handleClose}
                                  person={person1_i}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-element elementor-element-33954be">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-9b96701 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/fotor_2023-3-27_3_39_25.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-01f9fb5 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">VINCENZO</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7328efd elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          Senior Ambassador
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-443e706 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        {props.changeLan ? (
                          <p className="para para3">
                            {/* Vincenzo Palmeri, who holds degrees in mathematics
                            with qualifications in mathematics and CS,
                            mathematics and physics, has taught in high schools
                            as Vice Principal responsible for managing the
                            teaching staff. */}
                          </p>
                        ) : (
                          <p className="para para3">
                            Vincenzo Palmeri laureato in matematica con
                            abilitazioni in matematica e informatica, matematica
                            e fisica, ha insegnato nelle scuole secondarie
                            superiori con incarichi di vicepreside nella
                            gestione del personale docente, ha condotto la
                            direzione e la gestione di laboratori di informatica
                            e di fisica.
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-45d0bc6 elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-toggle3">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore5(true);
                                }}
                              >
                                Read more
                              </button>
                              {props.changeLan ? (
                                <Model
                                  show={readmore5}
                                  handleClose={handleClose}
                                  person={person2}
                                />
                              ) : (
                                <Model
                                  show={readmore5}
                                  handleClose={handleClose}
                                  person={person2_i}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-25 elementor-element elementor-element-85187f3">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-9746d08 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/WhatsApp_Image_2023-03-29_at_7.52.46_PM-removebg-preview.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-1c16341 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">Sirtre</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6b393bc elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          General Manager
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ea378f3 elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        {props.changeLan ? (
                          <p className="para para4">
                            {/* Sirtre is an experienced financial sector general
                            manager with over 25 years of experience. He holds a
                            degree in Business Economics and has a master’s
                            degree in Finance. */}
                          </p>
                        ) : (
                          <p className="para para4">
                            {/* Sirtre è un general manager con oltre 25 anni di
                            esperienza nel settore finanziario. Si è laureato in
                            Economia Aziendale e ha conseguito un master in
                            Finanza */}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7b8c75f elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-toggle4">
                          <div>
                            <div className="elementor-tab-title mttt">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore4(true);
                                }}
                              >
                                Read more
                              </button>
                              {props.changeLan ? (
                                <Model
                                  show={readmore4}
                                  handleClose={handleClose}
                                  person={person3}
                                />
                              ) : (
                                <Model
                                  show={readmore4}
                                  handleClose={handleClose}
                                  person={person3_i}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-element elementor-element-8654344 elementor-section-boxed st-s">
              <div className="elementor-container elementor-column-gap-custom">
                <div className="elementor-column elementor-col-33 elementor-element elementor-element-5eb5c1c">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-edac993 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/WhatsApp_Image_2023-03-29_at_7.52.46_PM-removebg-preview.png"
                          className="t-img alphaimg"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-b761440 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">MASSIMO</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-1106f69 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">Team Leader</h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d11496e elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        {props.changeLan ? (
                          <p className="para para5">
                            {/* Massimo is an experienced team leader with a wealth
                            of experience in the field of information management
                            technologies. */}
                          </p>
                        ) : (
                          <p className="para para5">
                            {/* Massimo è un team leader esperto con una vasta
                            esperienza nel campo delle tecnologie di gestione
                            delle informazioni. */}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-dae6723 elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-toggle5">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore2(true);
                                }}
                              >
                                Read more
                              </button>
                            </div>
                            {props.changeLan ? (
                              <Model
                                show={readmore2}
                                handleClose={handleClose}
                                person={person4}
                              />
                            ) : (
                              <Model
                                show={readmore2}
                                handleClose={handleClose}
                                person={person4_i}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="elementor-column elementor-col-33 elementor-element elementor-element-9cd59d3">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b3ee127 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/WhatsApp_Image_2023-03-29_at_7.52.46_PM-removebg-preview.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7b8be8a elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">M. Usama </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-0b7d8b8 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          E-commerce and Support.
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-2684daa elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        {props.changeLan ? (
                          <p className="para para6">
                            {/* He have experience in e-commerce over a year. He
                            have served multiple companies with my services . */}
                          </p>
                        ) : (
                          <p className="para para6">
                            {/* Ha esperienza nell'e-commerce da oltre un anno. Ha
                            servito diverse aziende con i miei servizi. Posso
                            capire la necessità dei clienti e aiutarli. */}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d183bff elementor-widget elementor-widget-toggle mt-2">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-togglefos">
                          <div>
                            <div className="elementor-tab-title mtttt">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore7(true);
                                }}
                              >
                                Read More
                              </button>
                              {props.changeLan ? (
                                <Model
                                  show={readmore7}
                                  handleClose={handleClose}
                                  person={person7}
                                />
                              ) : (
                                <Model
                                  show={readmore1}
                                  handleClose={handleClose}
                                  person={person7_i}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="elementor-column elementor-col-33 elementor-element elementor-element-9cd59d3">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b3ee127 elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/WhatsApp_Image_2023-03-29_at_7.52.46_PM-removebg-preview.png"
                          className="t-img alphaimg"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7b8be8a elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">Eugenio</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-0b7d8b8 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          International Ambassador
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-2684daa elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        {props.changeLan ? (
                          <p className="para para6">
                            {/* Eugenio Palmeri, a Mechanical Engineering graduate,
                            works in a Swiss company that specializes in machine
                            inspections and checks of mechanical components. */}
                          </p>
                        ) : (
                          <p className="para para6">
                            {/* Eugenio Palmeri laureato in ingegneria meccanica
                            lavora in una azienda svizzera che si occupa di
                            verifiche e controlli di macchine e dei relativi
                            componenti meccanici. */}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d183bff elementor-widget elementor-widget-toggle mt-2">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title mt5"
                                onClick={() => {
                                  setReadmore1(true);
                                }}
                              >
                                Read More
                              </button>
                              {props.changeLan ? (
                                <Model
                                  show={readmore1}
                                  handleClose={handleClose}
                                  person={person5}
                                />
                              ) : (
                                <Model
                                  show={readmore1}
                                  handleClose={handleClose}
                                  person={person5_i}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-33 elementor-element elementor-element-d37cfeb">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-385589f elementor-widget elementor-widget-image">
                      <div className="elementor-widget-container">
                        <img
                          src="https://itishstudios.net/assert/WhatsApp_Image_2023-03-29_at_7.52.46_PM-removebg-preview.png"
                          className="t-img"
                        />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-02241fd elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title">Giancarlo</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-3dfd6a0 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <h5 className="elementor-heading-title">
                          Marketing Director
                        </h5>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-564374d elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container">
                        {props.changeLan ? (
                          <p className="para _para7">
                            {/* Giancarlo is a seasoned professional in marketing
                            and communication. He has spent many years in the
                            financial technology sector, working with leading
                            global companies. */}
                          </p>
                        ) : (
                          <p className="para _para7">
                            {/* Giancarlo è un esperto professionista di marketing e
                            comunicazione. Ha trascorso molti anni nel settore
                            della tecnologia finanziaria, lavorando con aziende
                            leader a livello mondiale. */}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-827dbfd elementor-widget elementor-widget-toggle">
                      <div className="elementor-widget-container">
                        <div className="elementor-toggle elementor-toggle7">
                          <div>
                            <div className="elementor-tab-title">
                              <button
                                className="elementor-toggle-title"
                                onClick={() => {
                                  setReadmore(true);
                                }}
                              >
                                Read more
                              </button>
                              {props.changeLan ? (
                                <Model
                                  show={readmore}
                                  handleClose={handleClose}
                                  person={person6}
                                />
                              ) : (
                                <Model
                                  show={readmore}
                                  handleClose={handleClose}
                                  person={person6_i}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div>
          <div
            className={
              selectedOption === "option1"
                ? "footerss indexfooter"
                : "footerssb"
            }
          >
            {/* <Footer changeLan={props.changeLan} /> */}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* <div className={selectedOption === "option1" ? "footer" : "footerb"}>
        <Footer />
      </div> */}
    </>
  );
}

export default Mint;
