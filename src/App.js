
import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './pages/Layout';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  return (
   <Routes>
      <Route  element={<Layout />}  >
        <Route path='/'   element={ <Products/> }  />
        <Route path="/:title" element={<ProductDetails />} />
      </Route>
   </Routes> 
  )
}

export default App;
