import logo from './logo.svg';
import './App.css';
import {useState} from "react";
var md5 = require('md5');

function App() {
  const [input,setInput] = useState("");
  const [encodedinMD5,setencodedinMD5] = useState("");


  const toEncodeinMD5 = () => {
    setencodedinMD5(md5(input))
  }

  return (
    <div>
      <input onChange={ (e) => setInput(e.target.value)} placeholder="Input What You want To Encode"/>      
      <button onClick={ () => toEncodeinMD5()}>Encode</button>
      <p> MD5 : {encodedinMD5} </p>
    </div>
  );
}

export default App;
