
import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './pages/Layout';
import { Products } from './pages/Products';

function App() {
  return (
   <Routes>
      <Route element={<Layout />} path='/'>
        <Route  element={ <Products/> } path='/'  />
      </Route>
   </Routes> 
  )
}

export default App;
