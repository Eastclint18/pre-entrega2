// * import "bulma/css/bulma.css"
//import './App.css';
//import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemCount from "./components/ItemCount/ItemCount";
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App (options) {
  return (
    <div className = 'App'>
      <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route Path = '/' element ={<ItemListContainer />} />
        <Route path = '/category/:categoryId' element={<ItemListContainer />} />
        <Route path = '/item/:itemId' element={<ItemDetailContainer />} />
        <Route path = '*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );

  }








//function App(){
 // return (
  //  <div className="App">
   //   <NavBar />
    //  <ItemListContainer greeting={"Bienvenidos"}/>
     // <ItemCount initial={1} stock = {10} onAdd={(quantity) => console.log('cantidad agrega , ' + quantity)}/> 
     // <ItemDetailContainer/>

     //</div>
//  );
// }

export default App;