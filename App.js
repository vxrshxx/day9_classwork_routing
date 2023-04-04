import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layouts from './Layouts';
import Home from './Home';
import Albums from './Albums';
import Singers from './Singers';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="Singers" element={<Singers/>} />
        <Route path="Albums" element={<Albums/>} />
    </Route>
    </Routes>
  </BrowserRouter>
</div>
)}
export default App;


      



