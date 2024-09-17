
import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './pages/Layout';

function App() {
  return (
   <Routes>
      <Route element={<Layout />} path='/'>

      </Route>
   </Routes> 
  )
}

export default App;
