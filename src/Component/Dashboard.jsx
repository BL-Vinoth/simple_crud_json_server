import React from 'react'
import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import Read from './Read';
import Create from './Create';
import Edit from './Edit';

function Dashboard() {
  return (
    <BrowserRouter>
       {/* <div>
            <Link to='/' style={{color:'blue', padding:'10px'}}>Read</Link>
            <Link to='/create' style={{color:'green', padding:'10px'}}>Create</Link>
            <Link to='/edit' style={{color:'orange', padding:'10px'}}>Edit</Link>
       </div> */}
        <Routes>
            <Route path='/' element={<Read/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Dashboard;