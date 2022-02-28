import React from 'react';

export default function uutiset() {
  return <div> 
            <div className="flex-uutiset">
                <div className="uutinen-title">Päivän pää uutinen:</div>
                <div className="uutinen-items">Tutkijoiden mukaan hauki ei olekkaan kala vaan hanhi</div>
            </div>

            <div className="flex-uutiset">
                <div className="uutinen-title">PÄIVÄN TIMANTTI:</div>
                <div className="uutinen-items">Aatu Huttula on todettu eläväksi legendaksi!</div>
            </div>

            <div className="flex-uutiset flex-advert">
                <div className="uutinen-title">Mainos: </div>
                <div className="uutinen-items">MAINOS MAINOS MAINOS</div>
            </div>
            
         </div>;
}
