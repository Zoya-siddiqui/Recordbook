
import './App.css';
import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Header from './components/Header';


function App() {
  const [data, setData] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const addData = () => {
    setData([...data, { name, email }]);
    setname("");
    setemail("");
  }

  const removeItem=(index)=>{
    let arr=data;
    arr.splice()
    data.splice(index,1)
    setData([...arr])
  }
  return (
    <>
      <Header />
      <center>
        <div className='container my-3 d-flex justify-content-center '>
          <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event) => setname(event.target.value)} />
          <TextField id="outlined-basic" label="Email" variant="outlined" className='mx-2' value={email} onChange={(event) => setemail(event.target.value)} />
          <Button variant="contained" className='mx-2' onClick={addData}>Add</Button>
        </div>
        <div class="container my-5 w-50 shadow-sm p-3 mb-1 bg-white rounded align-items-center border border-1">
          <div class="row">
            <div class="col-sm">
              <b>NAME</b>
            </div>
            <div class="col-sm">
              <b>EMAIL</b>
            </div>
            <div class="col-sm">
              <b>REMOVE</b>
            </div>
          </div>
        </div>
        {
          data.map((ele, index) => {
            return (
              <>
              <div class="container w-50 shadow-sm p-2 mb-1 bg-white rounded align-items-center ">
                  <div class="row a" key={index}>
                      <div class="col-sm">
                          {ele.name}
                      </div>
                      <div class="col-sm">
                          {ele.email}
                      </div>
                      <div class="col-sm">
                          <Button variant="outlined" color="error" onClick={()=>removeItem(index)}>
                             DELETE
                          </Button>
                      </div>
                  </div>
              </div >
          </>
            )

          })
        }
      </center>

    </>
  );
}

export default App;
