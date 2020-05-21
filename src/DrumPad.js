import React, { Component } from 'react'

export default class DrumPad extends Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    window.focus()
  }
  
  componentWillMount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
  
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay (this.props.id)
  }

  render() {
    return (
      <div className ="drum-pad btn btn-warning mr-2 col-3 mb-2"
          id = {this.props.id}
          onClick = {this.handleClick}>
        <h4>{this.props.letter}</h4>
        <audio ref={ref=>this.audio = ref} 
          src={ this.props.src } 
          className= "clip"  
          type="audio/mp3" 
          id={this.props.letter}>
        </audio>  
      </div>
    )
  }
}
