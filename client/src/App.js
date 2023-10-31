import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Partners from './components/Partners/Partners';
import AddEdit from './components/Partners/AddPartner';
import Staff from './components/Staff/Staff'
import Event from './components/Event/Event';
import Donor from './components/Donor/Donor';
import Work from './components/Work/Work';
import Supervisor from './components/Supervisor/Supervisor';
import AwarenessSessions from './components/AwarenessSessions/AwarenessSessions';
import Cash from './components/Cash/Cash';
import CrowdFunding from './components/CrowdFunding/CrowdFunding';
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/partners' Component={Partners}/>
          <Route path='/addContact' Component={AddEdit}/>
          <Route path='/update/:id' Component={AddEdit}/>
          <Route path='/staff' Component={Staff}/>
          <Route path='/event' Component={Event}/>
          <Route path='/donor' Component={Donor}/>
          <Route path='/work' Component={Work}/>
          <Route path='/supervisor' Component={Supervisor}/>
          <Route path='/AwarenessSessions' Component={AwarenessSessions}/>
          <Route path='/Cash' Component={Cash}/>
          <Route path='/CrowdFunding' Component={CrowdFunding}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
