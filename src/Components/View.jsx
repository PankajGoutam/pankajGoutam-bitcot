import React, { useEffect, useState } from 'react'
import axios from 'axios'

const View = ({datas}) => {
    const [data,setData] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.get(" https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  },[]);
  if(isLoading){
    return <div>Loading...</div>
  }
  if(error)
  {
    return <div>Error : {error.message}</div>
  }
  return (
    <div>
      <h2>View Data</h2>
      <table border={'1px'}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default View

		
