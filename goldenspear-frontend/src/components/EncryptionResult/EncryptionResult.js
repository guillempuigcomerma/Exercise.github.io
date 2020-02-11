import React from 'react';
import './EncryptionResult.css';

class EncryptionResult extends React.Component{
  render(){
    return (
      <div>
      Encryption result: &nbsp;
        {
              this.props.encryptionResult
        }
      </div>
    )
  }
};

export default EncryptionResult;
