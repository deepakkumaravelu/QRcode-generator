import {useState} from 'react';
import './App.css';
import qr from 'qr-image';
import fs from 'fs';
var url="";

var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr.png'));
function App() {
  const[URLin,setURLin]=useState("");
  
 url=URLin;
  const handleSubmit=(e)=>{
    e.preventDefault();

  }
  const handleChange=(e)=>{
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
