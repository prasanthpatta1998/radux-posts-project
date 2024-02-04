import './App.css';
import PostsList from './features/Posts/PostsList';
import { Routes ,Route } from 'react-router-dom';
import Users from './features/Users/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PostsList/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
