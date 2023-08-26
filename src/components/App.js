
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [user,setUser] = useState("");
  let [password,setPassword] = useState("");
  let [error,setError] = useState(false);

  const checkInfo = ()=>{
    if(!user || !password){
      setError(true)
    }
    else{
      setError(false);
    }
  }


  return (
    <div>
        {/* Do not remove the main div */}
        {/* <h1>Hello</h1> */}
        <div>
          <label>Username: </label>
          <input type="text" onChange={(e)=>setUser(e.target.value)}/>
        </div>
        
        <div>
          <label>Password: </label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
          {
            error && <p id="errorMessage">Both username and password are required.</p>
          }
        </div>
        <div>
          <button onClick={checkInfo}>Login</button>
        </div>
    </div>
  )
}

export default App