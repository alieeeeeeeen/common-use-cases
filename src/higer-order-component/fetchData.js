function fetchData(props) {
  return new Promise((resolve, reject) => {
    const {url, ...other} = props;
    if(!window.XMLHttpRequest) {
      throw new TypeError('not found XMLHttpRequest');
    }
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = handleResponse;
    xhr.open('GET', url);
    xhr.send();
    function handleResponse(response) {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        if(xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          // not yet
          reject('error');
        }
      } else {
        // not yet
      }
    };
  })
}

export default fetchData;
