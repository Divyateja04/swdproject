import './App.css';

import Home from './Routes/Home';
import User from './Routes/User';
import Post from './Routes/Post';
import Albums from './Routes/Albums';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Routes/About';

function App() {
  return (
    <div className="App">
    <Router>
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:userID' element={<User />}/>
          <Route path='/posts/:postID' element={<Post />}/>
          <Route path='/albums/:albumID' element={<Albums />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
    
    </Router>
    </div>
  );
}

export default App;
