import React from 'react';

class Result extends React.Component{
  render(){
    return(
      <tr key={this.props.id}>
       <td>{this.props.id}</td>
       <td>{this.props.result.original_msg}</td>
       <td>{this.props.result.encrypted_msg}</td>
       <td>{this.props.result.original_msg_crc}</td>
      </tr>
    );
  }
};

export default Result;
