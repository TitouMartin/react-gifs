import React, {Component} from 'react';

import Gif from './gif.jsx';

class GifList extends Component {


  getClick = (param) => {
    this.props.handleClick(param);
  }


  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} getClick={this.getClick} />);
  }

  render() {
    return (
        <div className="gif-list">{
          this.renderList()
        }
        </div>
    );
  }

}


export default GifList;
