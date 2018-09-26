import React, {Component} from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      gifs: [],
      selectedGifId: ''
    }

    console.log(this.selectedGifId);
  }


  search = (query) => {
    giphy('ZWk0iTeL4A9n8MFcJIgLY58CA7xDE9ij').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }


  handleClick = (param) => {
    this.setState({
      selectedGifId: `${param}`
    });
  }


  leftScene = () => {
    if (this.state.selectedGifId === '') {
      return <h2 className="gif-placeholder">Please search for gifs <br></br> and select one !</h2>
    } else {
      return <Gif id={this.state.selectedGifId}/>
    }
  }

  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">{
            this.leftScene()
          }
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}


export default App;
