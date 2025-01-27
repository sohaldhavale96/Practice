// import React from 'react'
import axios from "axios";
import {useEffect,useState} from 'react';
function App() {
  const [data,setData] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      const fetchd = await axios.get("http://127.0.0.1:3000");
      // console.log(fetchd)
      setData(fetchd.data.message)
    }
    fetchData();
  },[])
  return (
    <div>{data}</div>
  )
}

export default App