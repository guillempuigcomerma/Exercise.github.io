import React from 'react';
import './Process.css';

import EncryptionResult from '../EncryptionResult/EncryptionResult';

import Goldenspear from '../../util/Goldenspear';

class Process extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      encryptionResult : []
    }
    this.encrypt = this.encrypt.bind(this);
  }


  encrypt(e){
    e.preventDefault();
    const word = this.word.value;
    Goldenspear.encryptMsg(word).then(results =>{
      this.setState({encryptionResult: results});
    });
  }

  render(){
    return(
      <form>
      <label>
        <p>What do you want to encrypt?</p>
        <input type="text" placeholder="Write a message" name="name" id="input" ref={(c) => this.word = c} />
      </label>
      <button id="button" type="submit" onClick={this.encrypt}>Encrypt</button>
      <EncryptionResult encryptionResult={this.state.encryptionResult}/>
    </form>
  );
  }


};

export default Process;
