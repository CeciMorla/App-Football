import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
    </div>
    </BrowserRouter>
  );
};

export default App;