import React, { useState } from 'react';
import "./CreateShortUrl.css";
import {CreateShortUrl} from '../AxiosApi/AxiosApi.js';


const App = () => {
  const [urlId, setUrlId] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [error, setError] = useState('');
  const validateURL = (url) => {
    let urlPattern = new RegExp('(http|https)://.+');
    return urlPattern.test(url);
  };

  const shortenURL = async (event) => {
    event.preventDefault();
    try{
    if (validateURL(urlInput)) {
      
        const res = await CreateShortUrl("/createShortUrl",urlInput);
        if(res && !res.startsWith("EXISTED")){
          setUrlId(res);
          setError('Successfully created the Short URL:');
        }
        else if(res.startsWith("EXISTED")){
              
          const existedLink = res.split(",");
          setUrlId(existedLink[1]);
          setError('Duplicate URL. Please use the already created short link')
        }
      
    } else {
      setError('Please enter a valid URL');
    }
  }
  catch(error){
    setError('Error while creating a short link ' +error);
  }
    //setUrlInput('');
  };

  return (
    <div className="container">
     <div className = "card">
       <label className="card-header">URL Shortner</label>
      <form className = "card-form" onSubmit={shortenURL}>
        <label>Enter the URL : </label>
        <br></br>
        <input type="text" value={urlInput} onChange={e => setUrlInput(e.target.value)} />
        <div id="submitButton"> 
        <button type="submit">Submit</button>
        </div>
      </form>
      <div className ={urlId === '' ? "error" : "success"}>
         {error && <p>{error} <a href={urlInput} target='_blank'>{`${urlId}`}</a></p>}
      </div>  
    </div>
    
    </div>
  );
};

export default App;
