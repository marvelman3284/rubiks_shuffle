import React from 'react';
import "./App.css";
import { Header } from "./Others";
import { shuffle } from "./Shuffle";

export class Cube extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {scramble: "", show: false}
  }

  handleClick() {
    var scrambleAlgo = shuffle(10);
    this.setState({scramble: scrambleAlgo, show: true})
  }


  render () {
    return (
      <>
        <Header/>
        <h3>
          <button class="button-name" onClick={this.handleClick}>Scramble</button>
          {this.state.show === true && 
            <h4> Here is your scramble {this.state.scramble} </h4>
          }
        </h3>
      </>
    );
  }
}

