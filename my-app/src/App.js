import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {sha256} from 'js-sha256';
import {sha3_256, sha3_512} from 'js-sha3';
import {keccak512} from 'js-sha3' ;
import ripemd160 from 'ripemd160-js'
var md5 = require('md5');


function App() {

  const [input,setInput] = useState("");
  const [encodedinMD5,setencodedinMD5] = useState("");

  const [input256,setInput256] = useState("");
  const [encodedin256,setencodedin256] = useState("");

  const [inputSHA512,setInputSHA512] = useState("");
  const [encodedinSHA512,setencodedinSHA512] = useState("");

  const [inputKeccak,setInputKeccak] = useState("");
  const [encodedinKeccak,setencodedinKeccak] = useState("");

  const [inputRip,setInputRip] = useState("");
  const [encodedinRip,setencodedinRip] = useState("");

  // const [input,setInput] = useState("");
  // const [encodedinMD5,setencodedinMD5] = useState("");


  const toEncodeinMD5 = () => {
    setencodedinMD5(md5(input))
  }
  const toEncodein256 = () => {
    setencodedin256(sha3_256(input256))
  }
  const toEncodeinSHA512 = () => {
    setencodedinSHA512(sha3_512(inputSHA512))
  }
  const toEncodeinKeccak = () => {
    setencodedinKeccak(keccak512(inputKeccak))
  }
  const toEncodeinRip = async() => {
    let res = await ripemd160(inputRip);
    setencodedinRip(res);
  }

  const toDecodeinMD5 = () => {
    setencodedinMD5(md5(input))
  }
  const toDecodein256 = () => {
    setencodedin256(sha3_256(input))
  }
  const toDecodeinSHA512 = () => {
    setencodedinSHA512(sha3_512(input))
  }
  const toDecodeinKeccak = () => {
    setencodedinKeccak(keccak512(input))
  }
  const toDecodeinRip = () => {
    setencodedinRip(ripemd160(input))
  }

  return (
    <div>
      <input onChange={ (e) => setInput(e.target.value)} placeholder="Input What You want To Encode in MD5"/>      
      <button onClick={ () => toEncodeinMD5()}>Encode</button>
      <button onClick={ () => toDecodeinMD5()}>Decode</button>
      
      <p> MD5 : {encodedinMD5} </p>

      <input onChange={ (e) => setInput256(e.target.value)} placeholder="Input What You want To Encode in SHA256"/>      
      <button onClick={ () => toEncodein256()}>Encode</button>
      <button onClick={ () => toDecodein256()}>Decode</button>
      
      <p> SHA256 : {encodedin256} </p>

      <input onChange={ (e) => setInputSHA512(e.target.value)} placeholder="Input What You want To Encode in SHA512"/>      
      <button onClick={ () => toEncodeinSHA512()}>Encode</button>
      <button onClick={ () => toDecodeinSHA512()}>Decode</button>
      <p> SHA512 : {encodedinSHA512} </p>

      <input onChange={ (e) => setInputKeccak(e.target.value)} placeholder="Input What You want To Encode in Keccak512"/>      
      <button onClick={ () => toEncodeinKeccak()}>Encode</button>
      <button onClick={ () => toDecodeinKeccak()}>Decode</button>
      <p> KECCAK512 : {encodedinKeccak} </p>

      <input onChange={ (e) => setInputRip(e.target.value)} placeholder="Input What You want To Encode in Keccak512"/>      
      <button onClick={ () => toEncodeinRip()}>Encode</button>
      <button onClick={ () => toDecodeinRip()}>Decode</button>
      <p> ripmd160 : {encodedinRip} </p>

    </div>
      
  );
}

export default App;
