import React from 'react';

let date = new Date();
let year = date.getFullYear();

const Footer = () => {
    return (
        <footer>
            <p><span>copyright &copy; {year}</span></p>
        </footer>
    );
};

export default Footer;