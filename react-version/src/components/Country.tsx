import React from 'react';

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

type CountryProp = {
  Country: Country;
};

export default function Country({ country }: CountryProp) {
  return (
    <div className="country">
      <div
        id="flag"
        className={`flag-icon-background flag-icon-${country.CountryCode.toLowerCase()}`}
      >
        {countryProp.Country}
      </div>
    </div>
  );
}
