import React, {Component} from 'react';

class Gif extends Component {

  clickFunction = () => {
    this.props.getClick(this.props.id);
  }


  render() {

  const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.clickFunction}/>
    );

  }
}


export default Gif;
