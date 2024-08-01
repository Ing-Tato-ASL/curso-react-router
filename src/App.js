import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import User from './components/User';

function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <div className='btn-group'>
          <NavLink to='/' className={({ isActive }) => isActive? "btn btn-dark active": 'btn btn-dark'}>
            Inicio
          </NavLink>
          <NavLink to='/contacto' className={({ isActive }) => isActive? "btn btn-dark active": 'btn btn-dark'}>
            Contacto
          </NavLink>
          <NavLink to='/nosotros' className={({ isActive }) => isActive? "btn btn-dark active": 'btn btn-dark'}>
            Nosotros
          </NavLink>
        </div>
        <hr />
        <Routes>
          <Route path='/' element={<Inicio />} exact />
          <Route path='/contacto' element={<Contacto />} exact />
          <Route path='/nosotros' element={<Nosotros />} exact />
          <Route path='/nosotros/:id' element={<User />} exact />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
