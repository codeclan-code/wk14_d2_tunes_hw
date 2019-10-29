import React from 'react';
import TuneSelector from '../components/TuneSelector';
import TuneDetail from '../components/TuneDetail';

class TuneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tunes: [],
      currentTune: null
    };
    this.handleTuneSelected = this.handleTuneSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then(res => res.json())
      .then(tunes => this.setState({ tunes: tunes }))
      .catch(err => console.error);
  }

  handleTuneSelected(index) {
    const selectedTune = this.state.tunes[index];
    this.setState({ currentTune: selectedTune })
  }

  render() {
    return (
      <div>
        <h2>iTunes Top 20 Books</h2>
        <TuneSelector tunes={this.state.tunes} onTuneSelected={this.handleTuneSelected} />
        <TuneDetail tune={this.state.currentTune} />
      </div>
    );
  }
}

export default TuneContainer;
