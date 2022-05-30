import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import internal from 'stream';
import Country from './components/Country';

type Country = {
  CountryName: string;
  CountryCode: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};

function App() {
  const [covidData, setCovidData] = useState<Country[]>([]);

  const getCovidData = () => {
    axios.get('https://api.covid19api.com/summary').then((response) => {
      setCovidData(response.data.Countries);
    });
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="App">
      {covidData.map((country: Country, id) => {
        return (<Country Country=country />;
      })}
    </div>
  );
}

export default App;
