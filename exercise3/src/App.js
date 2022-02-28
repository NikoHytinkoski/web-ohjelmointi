import Productlist from './components/Productlist'
import Searchbar from './components/Searchbar'
import React from "react";
import { useState } from "react";
import './App.css';
import keitin from './images/keitin.jpg'
import hiusten_kuivaaja from './images/hiusten kuivaaja.jpg'
import kaukoputki from './images/kaukoputki.jpg'
import mikro from './images/mikro.jpg'
import trimmeri from './images/trimmeri.jpg'
import lehma from './images/lehmä.jpg'
import puhelin from './images/puhelin.jpeg'
import basso from './images/basso.jpg'

import five from './images/five.png'
import four from './images/four.png'
import one from './images/one.png'

function App() {

    const [ productlist, setproductlist ] = useState([
        {img: keitin ,name: 'keitin',description: "keittää.",price: 83.99, rating: five},
        {img: hiusten_kuivaaja ,name: 'Hiusten kuivaaja',description: "on kuivaa",price: 12, rating: four},
        {img: kaukoputki ,name: 'kaukoputki',description: "jos pitää nähä kauemmas kuin näät",price: 5.99, rating: five},
        {img: mikro ,name: 'Mikro',description: "lämmin ruoke on hyvee",price: 150, rating: one},
        {img: trimmeri ,name: 'Trimmeri',description: "karvattomuuteen",price: 55, rating: five},
        {img: lehma ,name: 'lehmä',description: "lehmä,ei sen enempää eikä vähempää",price: 1000, rating:five}, 
        {img: puhelin ,name: 'Pipsa',description: "pissa possun julkaisema puhelin",price: 500, rating: four},
        {img: basso ,name: 'Kahvinkeitin',description: "tää keittää kahvia kai",price: 5, rating: five},
           
    ]);

    const priceDES = () => {
      let sortedDES = [...productlist];
      sortedDES.sort((a,b)=>{

        if(a.price > b.price) return -1;
        
        if(a.price < b.price) return 1;
        
      })
        setproductlist(sortedDES)
    }

    const priceASC = () => {
      let sortedASC = [...productlist];
      sortedASC.sort((a,b)=>{
        if(a.price < b.price) return -1;
        if(a.price > b.price) return 1;
        return 0;
      })
        setproductlist(sortedASC)
    }

    const nameASC = () => {
      let alphaASC = [...productlist]; //toimii
      alphaASC.sort((a,b)=>{
        let x = a.name.toUpperCase(),
        y = b.name.toUpperCase();
        return x === y ? 0 : x > y ? 1 : -1;
      })
      setproductlist(alphaASC)
    }
      
    const nameDES = () => {
      let alphaDES = [...productlist]; 
      alphaDES.sort((a,b)=>{   
        let x = a.name.toUpperCase(), 
        y = b.name.toUpperCase();
        return x === y ? 0 : x > y ? -1 : 1;
      })
      setproductlist(alphaDES)
    }
 

  return (
    <div className="App">
      <Searchbar priceDes = {priceDES} priceAsc = {priceASC} nameAsc = {nameASC} nameDes = {nameDES} />
        <div className ="productContainer">
          {productlist.map(p => <Productlist img={p.img} name={p.name} description={p.description} price={p.price} rating={p.rating}/>) }
      </div>
    </div>
  );
}

export default App;