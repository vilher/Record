import React from 'react';
var today = new Date();

function Footer(){
    return ( <footer>
    <p>Updated {today.getFullYear()}</p>
  </footer>
    );
};
export default Footer;