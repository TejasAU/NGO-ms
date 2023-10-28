import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import AddEdit from './components/Home/AddEdit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/addContact' Component={AddEdit}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
