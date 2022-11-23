import './App.css';
import {BrowserRouter,Route,Routes,Link,} from 'react-router-dom'
import Home from './component/home/Home'
import Nav from './component/nav/Nav';
import PollingUnit from './component/pollingUnit/PollingUnit';
import PollingUnitDetails from './component/pollingUnitDetail/PollingUnitDetails';
import CreatePollingunit from './component/pollingUnit/CreatePollingunit';
import CreatePollingUnitDetail from './component/pollingUnitDetail/CreatePollingUnitDetail';
import Ward from './component/ward/Ward';
import CreateWard from './component/ward/CreateWard';
import Lga from './component/lga/Lga';
import CreateLga from './component/lga/CreateLga';
import State from './component/state/State';
import CreateState from './component/state/CreateState';
import CreateUser from './component/users/CreateUser';
import User from './component/users/User';

function App() {
  return (
    <div className="App">
      
      
        
        <BrowserRouter>
        <Nav/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/polling'>
              <Route path='unit'>
                <Route path='data' element={<PollingUnit/>}/>
                <Route path='new' element={<CreatePollingunit/>}/>
              </Route>
              <Route path='detail' >
                <Route path='data' element={<PollingUnitDetails/>}/>
                <Route path='new' element={<CreatePollingUnitDetail/>}/>
              </Route>
              </Route>
              <Route path='ward'>
                <Route path='data' element={<Ward/>}/>
                <Route path='new' element={<CreateWard/>}/>
              </Route>
              <Route path='lga'>
                <Route path='data' element={<Lga/>}/>
                <Route path='new' element={<CreateLga/>}/>
              </Route>
              <Route path='state'>
                <Route path='data' element={<State/>}/>
                <Route path='new' element={<CreateState/>}/>
              </Route>
              <Route path='user'>
                <Route path='data' element={<User/>}/>
                <Route path='new' element={<CreateUser/>}/>
              </Route>
         
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
