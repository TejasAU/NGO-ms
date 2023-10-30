import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Partners from './components/Partners/Partners';
import AddEdit from './components/Partners/AddPartner';
import Staff from './components/Staff/Staff'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path='/' Component={Partners}/>
          <Route path='/addContact' Component={AddEdit}/>
          <Route path='/update/:id' Component={AddEdit}/>
          <Route path='/staff' Component={Staff}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
