import React from 'react';
//import logo from ''; oli tarkoitus tehdä kuva missä hauki oli photoshopattu hanheen mut aika ei riittäny

export default function News() {
  return (
            <div className="News-Container">
              <div className="News-item"> 
                  <h2>uutinen</h2>          
                    <img src={logo} />
                    <li>uutinen uutinen</li>
                  <p className="Title">Uutisen otsikko, yllätys</p>
                <div>Huutinen uutinen</div>                          
              </div>
            </div>
);}
