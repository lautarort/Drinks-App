import { Route } from 'react-router-dom';
import './App.css';
// import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
