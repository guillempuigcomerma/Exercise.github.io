import React from 'react';
import './App.css';

import Process from '../Process/Process';
import ResultsButton from '../ResultsButton/ResultsButton';
import ResultList from '../ResultList/ResultList';

import Goldenspear from '../../util/Goldenspear';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results : []
    }
    this.getResults = this.getResults.bind(this);
  }

  getResults(){
    Goldenspear.getData().then(results =>{
      this.setState({results: results});
      console.log('La resposta es: ', results);
    });
  }


  render(){
    return (
      <div className="App">
        <h1>Let's Encrypt</h1>
        <Process />
        <div>
          <ResultsButton getResults={this.getResults}/>
        </div>
        <div className="App-ResultList">
          <ResultList results={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default App;
