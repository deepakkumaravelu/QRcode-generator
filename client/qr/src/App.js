import {useState} from 'react';
import './App.css';

function App() {
  const[URLin,setURLin]=useState("");

 console.log(URLin);
  const handleSubmit=(e)=>{
    e.preventDefault();

  }
  const handleChange=(e)=>{
    setURLin(e.target.value);
    console.log(e.target.value);
    
  }
  return (
    <div className="App">
     <h1>QR-Generator</h1>
     <form onSubmit={handleSubmit}>
     <label>enter the url:</label>
      <input type="text" onChange={handleChange}></input>
      <button>Generate</button>
     </form>
    </div>
  );
}

export default App;
