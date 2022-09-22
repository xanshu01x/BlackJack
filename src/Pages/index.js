import { useEffect, useState } from "react";
import Dealer from "../Components/Dealer";
import Player from "../Components/Player";

const Home = () => {
  //To maintain components states
  const [playing, setPlaying] = useState(false);
  const [hiddenCard, setHiddenCard] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [endText, setEndText] = useState("Something Went Wrong!");
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [playerTotal, setPlayerTotal] = useState(0);

  //First render
  useEffect(() => {
    shuffleCards();
  }, [playing]);

  //Generating Random Number
  const randomNumberInRange = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  };

  //Function to shuffle the cards
  const shuffleCards = () => {
    setGameOver(false);
    setHiddenCard(true);
    setDealerCards([randomNumberInRange(1, 52), randomNumberInRange(1, 52)]);
    setPlayerCards([randomNumberInRange(1, 52), randomNumberInRange(1, 52)]);
  };

  //Hit button action
  const hitFunction = () => {
    const extraCard = [...playerCards, randomNumberInRange(1, 52)];
    setPlayerCards(extraCard);
    if (
      playerTotal +
        (extraCard[extraCard.length - 1] % 13 === 0 ||
        extraCard[extraCard.length - 1] % 13 > 10
          ? 10
          : extraCard[extraCard.length - 1] % 13) >
      21
    ) {
      setGameOver(true);
      setHiddenCard(false);
      setEndText("You Lost!");
    } else if (
      playerTotal +
        (extraCard[extraCard.length - 1] % 13 === 0 ||
        extraCard[extraCard.length - 1] % 13 > 10
          ? 10
          : extraCard[extraCard.length - 1] % 13) ===
      21
    ) {
      setGameOver(true);
      setHiddenCard(false);
      setEndText("You Won!!!");
    }
  };

  //Stand button action
  const standFunction = () => {
    setHiddenCard(false);
    if (
      playerTotal < 21 &&
      playerTotal >
        dealerTotal +
          (dealerCards[0] % 13 === 0 || dealerCards[0] % 13 > 10
            ? 10
            : dealerCards[0] % 13)
    ) {
      setGameOver(true);
      setEndText("You Won!!!");
    } else if (
      playerTotal ===
      dealerTotal +
        (dealerCards[0] % 13 === 0 || dealerCards[0] % 13 > 10
          ? 10
          : dealerCards[0] % 13)
    ) {
      setGameOver(true);
      setEndText("Push!");
    } else {
      setGameOver(true);
      setEndText("You Lost!");
    }
  };

  return (
    <div className="App">
      <header
        className="header"
        style={{
          backgroundColor: "blue",
          height: "50px",
          background: "linear-gradient(to bottom right,#ff1111, #211414)",
        }}
      >
        Black Jack
      </header>
      {playing ? (
        <>
          <button
            style={{
              margin: "10px",
              height: "50px",
              width: "150px",
              color: "white",
              fontSize: "30px",
              background: "linear-gradient(to bottom right, #566e69, #1d1717)",
            }}
            onClick={() => setPlaying((prev) => !prev)}
          >
            Exit
          </button>
          <button
            style={{
              margin: "10px",
              height: "50px",
              width: "150px",
              color: "white",
              fontSize: "30px",
              background: "linear-gradient(to bottom right, #9c8b0a, #4f430c)",
            }}
            onClick={() => shuffleCards()}
          >
            Restart
          </button>
          <div style={{ display: "flex" }}>
            <Dealer
              dealerCards={dealerCards}
              dealerTotal={dealerTotal}
              hiddenCard={hiddenCard}
              randomNumberInRange={randomNumberInRange}
              setDealerTotal={setDealerTotal}
            />
            <Player
              endText={endText}
              gameOver={gameOver}
              hitFunction={hitFunction}
              playerCards={playerCards}
              playerTotal={playerTotal}
              randomNumberInRange={randomNumberInRange}
              setPlayerTotal={setPlayerTotal}
              standFunction={standFunction}
            />
          </div>
        </>
      ) : (
        <div style={{ marginTop: "300px" }}>
          <button
            onClick={() => setPlaying((prev) => !prev)}
            style={{
              height: "50px",
              width: "150px",
              color: "white",
              fontSize: "30px",
              background: "linear-gradient(to bottom right,#003618, #149d5a)",
            }}
          >
            Let's Play
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
