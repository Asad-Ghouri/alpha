import ezgifcom from "../public/assert/ezgif.com-video-to-gif.gif";
import two from "../public/assert/2.gif";
import three from "../public/assert/3.gif";
import four from "../public/assert/4.gif";
import five from "../public/assert/five.gif";
import six from "../public/assert/6.gif";
import Image from "next/image";
import Footer from "./Footer";
import { Header } from "../components/Header";
import { SetStateAction, useState } from "react";
import { ethers } from "ethers";
import Model from "../components/Model";

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
    <h1 className="u_info">
    We are updating our site for new functionalities , please stay tuned
    </h1>

      {/* <div className={selectedOption === "option1" ? "footer" : "footerb"}>
        <Footer />
      </div> */}
    </>
  );
}

export default Mint;
