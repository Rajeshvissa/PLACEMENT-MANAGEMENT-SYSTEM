

import Nav from './components/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StudentList from './components/StudentList';
import CreateStudent from './components/CreateStudent';
import { HashRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
      {/* <StudentList></StudentList> */}

      <HashRouter>
        <Nav/>

        <Routes>

          {/* <Route path='/' element={<CreateStudent/>}/> */}
          <Route path='/create-student' element={<CreateStudent/>}/>

          <Route path='/student-list' element={<StudentList/>}/>


          
        </Routes>

      </HashRouter>


    
    </div>
  );
}

export default App;
