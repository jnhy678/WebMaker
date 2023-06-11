/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from'react';

function Board() {
  let [글제목, b] = useState([
    {name:'1'},
    {name:'2'},
    {name:'3'},
    {name:'4'}]
)
//   let temp = useState(tempz)

//   let tempz = (function () {
//     useState(async function () {

//         for (let i = 0; i < 10; i++) {
//             temp.push({name: i})
//         }
//     })
//     console.log(temp)
//   })();
  return (
    <div className="board">
      <div className="black-nav">
        
        <h4 style={{color:'red', fontSize:'20px'}}>ㅎㅇ</h4>
        {글제목.map((data, idx) => (
            <Modal key={idx} data={data.name}/>
        ))}
      </div>
        <div className="modal">
        </div>
    </div>
  );
}

function Modal({data}) {
    return (
        <div className="modal">
            <h4>{data}</h4>
        </div>
    );
}

export default Board;
