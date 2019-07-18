import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Button from "../../Components/Button/button";
import Input from "../../Components/Input/input";

class TypeRacer extends Component {
  componentDidMount() {
    this.props.onFetch();
  }

  startGame = () => {
    this.props.onInitTime();
    setInterval(() => {
      this.props.onCountdown();

      if (this.checkIfZero()) {
        this.props.onGameOver();
      }
    }, 1000);
  };

  checkIfZero = () => {
    if (this.props.time === 0) return true;
    else return false;
  };

  calcTime = () => {
    let endTime = new Date();
    let timeDiff = endTime - this.props.startTime;
    timeDiff /= 1000;
    timeDiff /= 60;
    let wpm = this.props.keyCount / 5 / timeDiff;
    wpm = Math.round(wpm);
    this.props.onSetWpm(wpm);
  };

  matchText = event => {
    if (
      event.target.value !== this.props.data.slice(0, event.target.value.length)
    ) {
      this.props.onIsNotMatch();
    } else {
      this.props.onIsMatch();
    }

    this.calcTime();
  };

  onKeyUpHandler = event => {
    this.matchText(event);
  };

  onClickHandler = () => {
    this.startGame();
  };

  render() {
    let warning = null;
    let data;
    if (this.props.loading) {
      data = "Loading...";
    } else {
      data = this.props.data;
    }
    let display;

    if (!this.props.correct) {
      warning = "Your Typing needs a correction";
    }

    if (this.props.gameOver) {
      display = (
        <React.Fragment>
          <h2> Game Over ...</h2>
          <h3> Words Per Minute : </h3>
          {this.props.wpm}
        </React.Fragment>
      );
    } else {
      display = (
        <React.Fragment>
          <h1>Time : {this.props.time}</h1>

          <h2>Words Per Minute : {this.props.wpm}</h2>
          <h1>Type the words as you see in the paragraph... It will notify you when you type any incorrect letter...</h1>

          <Button onClick={this.onClickHandler}> START </Button>

          <br />

          <Input
            type="text"
            name="userInput"
            onKeyUp={event => this.onKeyUpHandler(event)}
          />

          <h2>{warning}</h2>
          <p id="textPara">{data}</p>
        </React.Fragment>
      );
    }

    return display;
  }
}

const mapStateToProps = state => {
  return {
    correct: state.gameState.correct,
    wpm: state.gameState.wpm,
    gameOver: state.gameState.gameOver,
    keyCount: state.gameState.keyCount,
    time: state.gameState.totalTime,
    data: state.fetch.data,
    loading: state.fetch.loading,
    startTime: state.gameState.startTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetch: () => dispatch(actions.fetch()),
    onIsMatch: () => dispatch(actions.isMatch()),
    onIsNotMatch: () => dispatch(actions.isNotMatch()),
    onInitTime: () => dispatch(actions.initTime()),
    onCountdown: () => dispatch(actions.countdown()),
    onGameOver: () => dispatch(actions.gameOver()),
    onSetWpm: wpm => dispatch(actions.setWpm(wpm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeRacer);
