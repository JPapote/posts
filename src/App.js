import React from 'react';
import Blog from './components/containers/Blog/Blog';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    //BrowserRouter atrapa los components enrutados
    <BrowserRouter>
  <div>
    <Blog />
  </div>
  </BrowserRouter>
  );
}

export default App;
