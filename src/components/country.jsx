import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVsitedFlags }) => {
    const {name,flags, population, area,cca3} = country;

        const [visited,setVisited] =useState(false);

        const handleVisited = () => {
            setVisited(!visited);
        }
        
        const passWithParams = () => handleVisitedCountry(country);
        
    return (
        <div className={`country ${visited && 'visited' }`}>
            <h2 style={{color: visited? 'green':'white'}}>{name.common}</h2>
            <img className='img' src={flags.png} alt="" />
            <h5>Population: {population} </h5>
            <h5>Area: {area}</h5>
            <p><small>Code: {cca3} </small></p>
            <button onClick={passWithParams}>Mark visited</button>
            <hr />
            <button onClick={() => handleVsitedFlags(country.flags.png)}>Add Flag</button>
            <hr />
            <button onClick={handleVisited}>{visited? 'visited' : 'Going' }</button>
            <h4>{visited? "I have visited this country.": "I want to visit"}</h4>
        </div>
    );
};

export default Country;