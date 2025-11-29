import { useState } from 'react'
import './components.css'

function Api () {
  const [joke, setJoke] = useState ([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke"); /* add url api here*/
      const data = await response.json();
      /*console.log(data);*/
      setJoke(data);
    }
    catch (error){
      console.log("Error fetching data", error);
    };
  };
  /*useEffect(() => {fetchData();}, []);*/
  const generateJoke = () => {
    fetchData();

  }
  return(
      <div>
        <h1>API</h1>
        <button onClick={generateJoke}>Generate Joke</button>
        <p>Setup: {joke.setup} </p>
        <p>Punchline: {joke.punchline} </p>
      </div>
  )
}
export default Api;