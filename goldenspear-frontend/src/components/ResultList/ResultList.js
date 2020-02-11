import React from 'react';
import './ResultList.css'

import Result from '../Result/Result';

class ResultList extends React.Component{
  render(){
    return (this.props.results && this.props.results.length > 0) ? (
      <div className="ResultList">
        <table id='results'>
          <thead>
            <tr>
              <th>Message #</th>
              <th>Original message</th>
              <th>Encrypted message</th>
              <th>Original message CRC</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.results.map(result => {
              return <Result key={result.id} id={result.id} result={result}/>
            })
          }
          </tbody>
       </table>
      </div>
    ) : null;
  }
};

//cal exportarlo perque sera renderitzat per un altre component
export default ResultList;
