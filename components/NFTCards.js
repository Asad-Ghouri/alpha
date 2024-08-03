import React from "react";
import styled from "styled-components";

const GlobalStyle = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top:5rem;
`;

const NFTCard = () => {
  return (
    <GlobalStyle>
      <CardContainer>
        <Card>
          <CardImage
            src="https://sovanza.com/assert/1.gif"
            alt="NFT Title 1"
          />
          <CardBody>
            <CardTitle>Starter</CardTitle>
            <CardDescription>Stake to get 15% of 20 Matic</CardDescription>
            <CardPrice>20 Matic</CardPrice>
          </CardBody>
        </Card>

        <Card>
          <CardImage
            src="https://sovanza.com/assert/2.gif"
            alt="NFT Title 2"
          />
          <CardBody>
            <CardTitle>Basic</CardTitle>
            <CardDescription>Stake to get 15% of 50 Matic</CardDescription>
            <CardPrice>50 Matic</CardPrice>
          </CardBody>
        </Card>

        <Card>
          <CardImage
            src="https://sovanza.com/assert/3.gif"
            alt="NFT Title 3"
          />
          <CardBody>
            <CardTitle>Standard</CardTitle>
            <CardDescription>Stake to get 15% of 100 Matic</CardDescription>
            <CardPrice>100 Matic</CardPrice>
          </CardBody>
        </Card>
      </CardContainer>
    </GlobalStyle>
  );
};

const Card = styled.div`
  width: 300px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background: none;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
  background-color: rgba(100, 0, 0, 0.2);
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  color:white;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
  color:white;
`;

const CardPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  color:white;

  margin-top: 8px;
`;

export default NFTCard;