import { useState } from 'react';
import React from 'react';
import './App.css';

export default function App() {
  const [task, setTask] = useState("task here");
  const [description, setDescription] = useState("No Description");
  const [tasklist, setTasklist] = useState([]);
  const [descriptionlist, setDescriptionlist] = useState([]);
  const [completelist, setCompletelist] = useState([]);
  function HandleSubmit (e)
  {
    e.preventDefault();
    setTasklist([...tasklist,task]);
    setDescriptionlist([...descriptionlist,description]);
    setTask('');
    setDescription('')

  }
  function deletetask(index) {
    const newlist = tasklist.filter((_, i) => i !== index);
    const newlistd = descriptionlist.filter((_, i) => i !== index
    );
    setTasklist(newlist);
    setDescriptionlist(newlistd);
  }
  function completetask(index) {
    const newlist = tasklist.filter((_, i) => i !== index
    ,
    setCompletelist([...completelist,tasklist[index]])
    );
    setTasklist(newlist);
  }
  
  

  
  

  return (
    <div className='App'>
      <h1 style={{color:'white'}}>Ahmed To-Do App</h1>
    <form onSubmit={HandleSubmit}>
        <input style={{height:'25px',width:'200px'}}
          type="text" 
          placeholder={task}
          onChange={(e) => setTask(e.target.value)}
        /><br/>
        <input style={{height:'50px',width:'1000px'}}
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br/>
        <input style={{borderRadius:"50px"}} type="submit" value='add task'/>
    </form>
    <ul>
        {tasklist.map((item, index) => (
          <li key={index}>
            <h2 style={{backgroundColor:'lightgoldenrodyellow',color:'black'}}>{item}</h2>
            <strong><p style={{backgroundColor:'red',color:'white'}}>{descriptionlist[index]} </p> </strong>
            <button style={{color:'white',backgroundColor:'black',borderRadius:"50px"}} onClick={() => deletetask(index)}>delete</button>
            <button style={{color:'white',backgroundColor:'black',borderRadius:"50px"}} onClick={() => completetask(index)}>Complete</button>
            
          </li>
        ))}
      </ul>
      <h1 style={{color:'white'}}>Complete list</h1>
      <ul>
        {completelist.map((item, index) => (
          <li key={index}>
            <p style={{backgroundColor:'lightgoldenrodyellow',color:'black'}}>{item}</p>
          </li>
        ))}
      </ul>
    
    </div>
  )
}