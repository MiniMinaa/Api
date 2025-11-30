import { useState } from 'react'
import './components.css'

function Api () {
    const [joke, setJoke] = useState ([]);
    const [ratings, setRatings] = useState([]);
    const [rated, setRated] = useState(false);
    const [selectedRating, setSelectedRating] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke"); /* add url api here*/
            const data = await response.json();
            /*console.log(data);*/
            setJoke(data);
        }
        catch (error) {
            console.log("Error fetching data", error);
        };
    };

    const rateJoke = (value) => {
        setRated(true);
        setSelectedRating(value);
        setRatings(prev => [...prev, value]);
    };

    const averageRating = ratings.length > 0
    ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1): "No ratings yet";

    /*useEffect(() => {fetchData();}, []);*/
    const generateJoke = () => {
        setRated(false);
        setSelectedRating(null)
        fetchData();
    }

    return (
        <div className='joke-container'>
            <h1>API</h1>
            <button onClick={generateJoke}>Generate Joke</button>
            <p>Setup: {joke.setup} </p>
            <p>Punchline: {joke.punchline} </p>
            <div className='rating-buttons'>
                <h3>Rate This Joke</h3>
                {[1,2,3,4,5].map(num => (
                    <button
                        key={num}
                        onClick={() => rateJoke(num)}
                        disabled={rated}
                        className={`rating-button
                            ${selectedRating === num ? 'selected' : ''}
                            ${rated && selectedRating !== num ? 'rated' : ''}`}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Api;
