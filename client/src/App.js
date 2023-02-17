import React , {useEffect,useState} from 'react';
import BasicExample from './card.js';
import 'bootstrap/dist/css/bootstrap.css';

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
      <BasicExample></BasicExample>
  
    </div>
  );
}

export default App;