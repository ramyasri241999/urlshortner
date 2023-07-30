import React, { useEffect, useState } from "react";
import { getOriginalUrl } from "../AxiosApi/AxiosApi";
import { Link } from "react-router-dom";

const SearchAndOpenUrl =  () =>{

    const [urlId, setUrlId] = useState('');
    const [urlInput, setUrlInput] = useState('');
    const [error, setError] = useState('');
    const [createError, setCreateError] = useState('');
    const [redirect,setRedirect] = useState(false);

    useEffect (()=>{
      if(redirect){
        window.open(decodeURIComponent(urlId),"_blank");
        setRedirect(false);
      }
    },[redirect]);


    const validateURL = (url) => {
      let urlPattern = new RegExp("^[A-Za-z0-9_-]{8}$", "i");
      return urlPattern.test(url);
      };
      
    const getUrl = async (event) => {
        event.preventDefault();
    try{
        if(validateURL(urlInput)){
          
            const res = await getOriginalUrl("/"+urlInput);
            setError('');
            if(res && res !== "EXPIRED"){
              setRedirect(true);
              setUrlId(res);
              setCreateError('');
            }
            else if(res === "EXPIRED"){
              setCreateError("Short link has expired. Please create new short Link");
              
            }
            else {
              setCreateError("The short link you've entered doesn't seem to exist. Could you please create a new one");
              
            }
           
        }
        else{
            setError("Invalid short Link. Please Enter a valid short Link");
        }
      }
       catch(error){
        setError("Error while fetching the original URL "+ error);
       }
    };

return (
    <div className="container">
    <div className = "card">
      <label className="card-header">Search and Open the Link</label>
     <form className = "card-form" onSubmit={getUrl}>
       <label>Enter the shortend URL : </label>
       <br></br>
       <input type="text" value={urlInput} onChange={e => setUrlInput(e.target.value)} />
       <div id="submitButton"> 
       <button type="submit">Visit</button>
       </div>
     </form>
     <div className = "error">
        {error && <p>{error}</p>}
        {createError && <p>{createError} <Link to="/createShortUrl">Create Short Link</Link></p>}
     </div>  
   </div>
   </div>
 );

}

export default SearchAndOpenUrl;