import './App.css';

import Home from './Routes/Home';
import User from './Routes/User';
import Post from './Routes/Post';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:userID' element={<User />}/>
          <Route path='/posts/:postID' element={<Post />}/>
        </Routes>
    
    </Router>
    </div>
  );
}

export default App;
