import React from "react";
import './Header.css'
import one from "../Images/one.png"
import two from "../Images/two.png"
import three from "../Images/three.png"

export const Header = () => {

    return (
      <div>
           <div className="header">
               <div>
                   <img className="foto" src={one} />
               </div>
               <div>
                   <img className="foto" src={two} />
               </div>
               <div>
                    <img className="foto" src={three} />
               </div>
           </div>
      </div>
    );
};