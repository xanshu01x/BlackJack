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

const Player = ({
  endText,
  gameOver,
  hitFunction,
  playerCards,
  playerTotal,
  setPlayerTotal,
  standFunction,
}) => {
  //First render
  useEffect(() => {
    getTotal(playerCards);
  }, [playerCards]);

  //To get the total of player cards
  const getTotal = (playerCards) => {
    let totalCount = 0;
    Object.values(playerCards).map((cardNum) => {
      console.log("Number ->", cardNum);
      console.log("Number%13 ->", cardNum % 13);
      totalCount =
        totalCount +
        parseInt(
          cardScore[cardNum % 13 === 0 || cardNum % 13 > 10 ? 10 : cardNum % 13]
        );
    });
    setPlayerTotal(totalCount);
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
      You {playerTotal}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "150px",
        }}
      >
        <Cards cards={playerCards} />
      </div>
      <div>
        <button
          disabled={gameOver}
          onClick={() => hitFunction()}
          style={{
            marginRight: "10px",
            height: "50px",
            width: "150px",
            color: "white",
            fontSize: "30px",
            background: "linear-gradient(to bottom right, #003cf0, #252b43)",
          }}
        >
          Hit
        </button>
        <button
          disabled={gameOver}
          onClick={() => standFunction()}
          style={{
            marginLeft: "10px",
            height: "50px",
            width: "150px",
            color: "white",
            fontSize: "30px",
            background: "linear-gradient(to bottom right, #c72020, #4e0a0a)",
          }}
        >
          Stand
        </button>
      </div>
      {gameOver ? <div style={{ fontSize: "100px" }}>{endText}</div> : ""}
    </div>
  );
};

export default Player;
