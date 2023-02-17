import React , {useEffect,useState} from 'react';

function App() {

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
    <div>
      
      {(typeof backendData.users === 'undefined')?(<p>Loading...</p>):(backendData.users.map((user,i)=>(<p key ={i} >{user}</p>)))}
      
    </div>
  );
}

export default App;