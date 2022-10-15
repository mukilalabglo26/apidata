import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Apiget from './apiget';
import Nextpage from './nextpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Apiget />} />
          <Route path='/:id' element={<Nextpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
