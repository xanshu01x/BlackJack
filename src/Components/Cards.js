const Cards = ({ cards, hiddenCard = false }) => {
  const everyCardTypes = {
    1: "AS",
    2: "2S",
    3: "3S",
    4: "4S",
    5: "5S",
    6: "6S",
    7: "7S",
    8: "8S",
    9: "9S",
    10: "10S",
    11: "JS",
    12: "QS",
    13: "KS",
    14: "AH",
    15: "2H",
    16: "3H",
    17: "4H",
    18: "5H",
    19: "6H",
    20: "7H",
    21: "8H",
    22: "9H",
    23: "10H",
    24: "JH",
    25: "QH",
    26: "KH",
    27: "AC",
    28: "2C",
    29: "3C",
    30: "4C",
    31: "5C",
    32: "6C",
    33: "7C",
    34: "8C",
    35: "9C",
    36: "10C",
    37: "JC",
    38: "QC",
    39: "KC",
    40: "AD",
    41: "2D",
    42: "3D",
    43: "4D",
    44: "5D",
    45: "6D",
    46: "7D",
    47: "8D",
    48: "9D",
    49: "10D",
    50: "JD",
    51: "QD",
    52: "KD",
  };

  return (
    <>
      {hiddenCard ? (
        <>
          <img
            src={`/images/gray_back.png`}
            style={{
              width: "150px",
              height: "200px",
            }}
          />
          {Object.values(cards).map(
            (card, index) =>
              index !== 0 && (
                <img
                  src={`/images/${everyCardTypes[card]}.png`}
                  style={{
                    width: "150px",
                    height: "200px",
                  }}
                />
              )
          )}
        </>
      ) : (
        Object.values(cards).map((card, index) => (
          <img
            src={`/images/${everyCardTypes[card]}.png`}
            style={{
              width: "150px",
              height: "200px",
            }}
          />
          //   <div
          //     key={index}
          //     style={{
          //       width: "150px",
          //       height: "200px",
          //       border: "1px solid grey",
          //       color: "black",
          //       fontSize: "30px",
          //       backgroundColor: "white",
          //       background: "linear-gradient(to bottom right, #d6d6d6, #ffffff)",
          //     }}
          //   >
          //     Card
          //     <div style={{ fontSize: "40px", marginTop: "50px" }}>
          //       {cardTypes[cards[card]]}
          //     </div>
          //   </div>
        ))
      )}
    </>
  );
};

export default Cards;

// -----------Hit should add one more random Card
// -----------Hidden Card for dealer
// -----------Stand should reveal the dealer hidden card
// -----------J, Q, K should have 10 score
// -----------Winning or Loosing Text handling
// -----------If scores are equal then Push
// Cards image
// Card shuffle with colors
// A should be either 1 or 11 accordingly
// Chips Score Management
