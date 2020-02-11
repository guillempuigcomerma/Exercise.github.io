import React from 'react';
//import ResultsList from '../ResultList/ResultList';

class ResultsButton extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleSearch(event){
    this.props.getResults();
    event.preventDefault();
  }

  render(){
    return(
      <button className="ResultsButton" onClick={this.handleSearch}>
        Show results
      </button>
    );
  }
}

export default ResultsButton;
