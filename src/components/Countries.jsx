import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVsitedFlags = flag => {
        const newVisitedFlags = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlags);
    }

    // remove item from an array in a state
    // use filter to select all the elements expect the one you want to remove

    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            {/* visited country */}
            <div className={"li"} >
                <h4>Visited Countries: {visitedCountries.length} </h4>
                <ul >
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                    {
                        visitedFlag.map(flag => <img className="flag-style" key={Country.cca3} src={flag}></img>)
                    }
            </div>
            {/* display country */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVsitedFlags={handleVsitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;