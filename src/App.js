import Buttons from './components/Buttons'
import uutiset from './components/uutiset'
import News from './components/News'
import Sidebar from './components/SideNewsBar'
import './App.css';



function App() {

 
  return (
    <div className="App">
      <body>
        <Buttons/>          {/* topmenu buttons */}           
            <uutiset/>   {/*headlines after the topmenu, also the advert. */}
                <div className="Main-container">                        
              <News/>   {/* frontpage headnews */}                     
            <Sidebar/> {/* Sidebar most read news */}                      
          </div>
      </body> 
    </div>
  );
}

export default App;
