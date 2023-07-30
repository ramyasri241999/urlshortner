import React from 'react';

const HomeComponent = () => {
  return (
   <div>
        <p>This project comprises two main features, namely :</p> 
<p>1. 'Search': This feature allows users to enter a previously generated short URL. Once submitted, the system will redirect the user to the original, longer URL that was shortened earlier. However, if a user enters a short URL that has not been previously created in our system, User will be provided with a link to the 'Create' screen.
</p>
<p>2. 'Create': This feature empowers users to shorten their desired URLs. By directly clicking on the 'Create short URL' link, users can input any lengthy URL and convert it into a short, manageable link for easier sharing and usage.

Through these two components, our project aims to simplify the experience of dealing with lengthy URLs by providing user-friendly tools for URL shortening and easy redirection.
</p>
<p>Note: Short Link Validity is 5 minutes </p>
</div>
    
  );
};

export default HomeComponent;
