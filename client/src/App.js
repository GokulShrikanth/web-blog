import './App.css';
import Layout from './Layout';
import Post from './Post';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={'/login'} element={<div className="login"> </div>} />
      </Route>
    </Routes>
  );
}

export default App;
