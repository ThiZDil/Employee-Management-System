import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import ListEmpComponent from './components/ListEmpComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmpComponent from './components/CreateEmpComponent';
import UpdateEmpComponent from './components/UpdateEmpComponent'

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent /> 
            <div className="container">
            <Routes>
              <Route path='/' element={<ListEmpComponent />} />
              <Route path='/employees' element={<ListEmpComponent />} />
              <Route path='/addEmployee' element={<CreateEmpComponent />} />
              <Route path='/updateEmployee/:id' element={<UpdateEmpComponent />} />
            </Routes>
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
