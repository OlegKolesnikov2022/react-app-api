import ListGroup from 'react-bootstrap/ListGroup';
import React , {useEffect,useState} from 'react';

function BasicExample() {

    const [backendData, setBackendData] = useState ([{}])

    // fetches json data from back end and sets it to the backendData variable
    useEffect(() => {
        fetch ("/api").then(
          response => response.json()
        ).then(
          data =>{
            setBackendData(data)
          }
        )
        // [] ensures that the function only runs one time after rendering
    },[])


    
  return (
    <div style = {{width: "50%",margin: "auto",textAlign: "center"}}>
  
    
        <ListGroup>
      <ListGroup.Item>Output</ListGroup.Item>
      <ListGroup.Item variant="primary">    {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[0])}</ListGroup.Item>
      <ListGroup.Item variant="secondary">  {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[1])}</ListGroup.Item>
      <ListGroup.Item variant="success">    {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[2])}</ListGroup.Item>
      <ListGroup.Item variant="dark">       {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[3])}</ListGroup.Item>
      <ListGroup.Item variant="danger">     {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[4])}</ListGroup.Item>
      <ListGroup.Item variant="warning">    {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[5])}</ListGroup.Item>
      <ListGroup.Item variant="info">       {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[6])}</ListGroup.Item>
      <ListGroup.Item variant="light">      {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[7])}</ListGroup.Item>
      <ListGroup.Item variant="dark">       {(typeof backendData.users === 'undefined')?(<p>Loading...</p>): (backendData.users[8])}</ListGroup.Item>

    </ListGroup>
    </div>

  );
}

export default BasicExample;