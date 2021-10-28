import { Route } from 'react-router-dom';
import './App.css';
// import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Route exact path='/carrito' component={Cart} />
      <Route path='/' component={NavBar} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
