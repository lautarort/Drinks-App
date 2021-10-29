import { Route } from 'react-router-dom';
import './App.css';
// import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import CardDetails from './components/CardDetails/CardDetails';
// import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <Route  path='/' component={Modal}/> */}
      <Route exact path='/carrito' component={Cart} />
      <Route path='/' component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={CardDetails} />
      </div>
  );
}

export default App;
