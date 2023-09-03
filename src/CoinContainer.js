import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./Helpers";
import "./CoinContainer.css";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "https://res.cloudinary.com/gerhynes/image/upload/q_auto/v1560713969/irish-two-euro-face_qcuftk.jpg",
      },
      {
        side: "tails",
        imgSrc:
          "https://res.cloudinary.com/gerhynes/image/upload/q_auto/v1560713976/irish-two-euro-reverse_uf62ec.jpg",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's flip a coin</h2>
        <button onClick={this.handleClick}>Flip me!</button>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <p>
          Out of {this.state.nFlips} flips there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
