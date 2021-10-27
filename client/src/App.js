import { Route } from 'react-router-dom';
import './App.css';
import CardDetails from './components/CardDetails/CardDetails';
// import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={CardDetails} />
    </div>
  );
}

export default App;
