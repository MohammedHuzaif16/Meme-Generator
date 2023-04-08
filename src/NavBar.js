import React from "react";
import './index.css';

export default function NavBar(){

    return(
            <header className="container-nav">
                
                    <img className="img1" src={require("./imgs/patrick.png")} />
                    <h3 className="c1">Meme Generator</h3>
                    <h4 className="h1">React Project 1</h4>

            </header>    
    )}