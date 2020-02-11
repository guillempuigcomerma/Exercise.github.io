const baseUrl = 'http://localhost:4001';

const Goldenspear = {};

Goldenspear.getData = () => {
    const url = `${baseUrl}/history`;
    return fetch(url)
    .then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.results) {
        return jsonResponse.results.map(result => ({
          id: result.id,
          original_msg: result.original_msg,
          encrypted_msg: result.encrypted_msg,
          original_msg_crc: result.original_msg_crc
      }));
    }
  });
}

Goldenspear.encryptMsg = word => {
  const url = `${baseUrl}/process`;
  const data = JSON.stringify({word: word});
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  };
  return fetch(url, fetchOptions).then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))
  .then(jsonResponse=>{
    if(jsonResponse.encryptionResult){
      return jsonResponse.encryptionResult.encrypted_msg;
    } else {
      return jsonResponse;
    }

  })
}


export default Goldenspear;
