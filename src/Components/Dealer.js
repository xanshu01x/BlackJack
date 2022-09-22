import { useEffect, useState } from "react";
import Cards from "./Cards";

const cardScore = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "10",
  12: "10",
  13: "10",
};

const Dealer = ({ dealerCards, dealerTotal, hiddenCard, setDealerTotal }) => {
  useEffect(() => {
    getTotal(dealerCards);
  }, [hiddenCard, dealerCards]);

  //To get the total of dealer cards
  const getTotal = (dealerCards) => {
    let totalCount = 0;
    let withHiddenCount = 0;
    const unhiddenCards = [...dealerCards];

    if (hiddenCard) {
      unhiddenCards.shift();
    }
    unhiddenCards.map((cardNum) => {
      totalCount =
        totalCount +
        parseInt(
          cardScore[cardNum % 13 === 0 || cardNum % 13 > 10 ? 10 : cardNum % 13]
        );
    });
    dealerCards.map((cardNum) => {
      withHiddenCount =
        totalCount +
        parseInt(
          cardScore[cardNum % 13 === 0 || cardNum % 13 > 10 ? 10 : cardNum % 13]
        );
    });
    setDealerTotal(totalCount);
    console.log("Total count in Dealer-> ", totalCount);
  };

  return (
    <div
      style={{
        width: "50%",
        height: "800px",
        border: "1px solid grey",
        color: "white",
        fontSize: "40px",
        background: "linear-gradient(to bottom right, #003618, #149d5a)",
      }}
    >
      Dealer {dealerTotal}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "150px",
        }}
      >
        <Cards cards={dealerCards} hiddenCard={hiddenCard} />
      </div>
    </div>
  );
};

export default Dealer;
