import React, { Component } from 'react';
import DrumPad from './DrumPad';
import {soundData} from './soundData';

export default class DrumMachine extends Component {
  constructor (props) {
    super (props);
    this.state = {
      display: "Druming Away"
    };
  };
  
  handleDisplay = display => this.setState({display});

  render() {
    return (
      <div>
        <div className="card bg-dark text-warning text-center mx-auto">
          <div className="card-header" id="display">
            Drum Machine ~~ {this.state.display}
          </div>
          
          <div className="card-body">
            <div className = "form-group row justify-content-around">
              {soundData.map (data => (
                <DrumPad
                  id = {data.id}
                  letter = {data.keyTrigger}
                  src = {data.url}
                  ref={this.setPadRef}
                  handleDisplay = {this.handleDisplay}
                  />
              ))}
              
            </div>
          </div>
        </div>       
      </div>
    )
  }
}
