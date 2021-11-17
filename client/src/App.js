import './App.css';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Activity from './components/Activity/Activity';
import CountryDetail from './components/CountryDetail/CountryDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/activity' component={ Activity } />
          <Route exact path='/countries' component={Home} />
          <Route exact path='/countries/:id' component={CountryDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
