import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
          <Routes>
            <Route path='/' element={<EmployeeList />} />
            <Route path='/create-employee' element={<EmployeeForm />} />
            <Route path='/edit-employee/:id' element={<EmployeeForm />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
