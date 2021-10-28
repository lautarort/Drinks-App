import { Route } from 'react-router-dom';
import './App.css';
// import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
       <Route exact path='/' component={Landing}/>
      <Route exact path="/home" component={Home} />
      <Route exact path='/carrito' component={Cart} />
      <Route path='/home' component={NavBar} />
    </div>
  );
}

export default App;
