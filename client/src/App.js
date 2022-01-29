import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Live from './components/Live/Live';
import Next from './components/Next/Next';
import Finish from './components/Finish/Finish';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/live' component={Live}/>
      <Route exact path='/next' component={Next}/>
      <Route exact path='/finish' component={Finish}/>
    </div>
    </BrowserRouter>
  );
};

export default App;