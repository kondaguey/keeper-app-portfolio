import React from "react";

const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <footer>
      <p>The Keeper App&trade;, &copy;{year}</p>
    </footer>
    
  );
}

export default Footer;