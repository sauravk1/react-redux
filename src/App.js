
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from './components/CartPage';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element= {<Cart />}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
