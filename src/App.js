
import { Route, Routes } from 'react-router';
import './App.css';
import { Header } from './companents/Header';

function App() {
  return (
   <Routes>
      <Route element={<Header/>} path='/'>
      </Route>
   </Routes> 
  )
}

export default App;
