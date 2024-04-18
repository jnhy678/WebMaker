/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Board from './board.js';
import TEMP from './temp.js';
import React, {useState, useEffect } from'react';

function App() {
  let [글제목, b] = useState('test test')

  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempArray = [];
      for (let i = 0; i < 10; i++) {
        tempArray.push({ name: i });
      }
      setTemp(tempArray);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <TEMP/>
    temp : 
    {temp.map((data, idx) => (
        <a key={idx}>{data.name}</a>
    ))}
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:'20px'}}>ㅎㅇ</h4>
        {글제목}
        <Board/>
      </div>
    </div>
  );
}

export default App;
