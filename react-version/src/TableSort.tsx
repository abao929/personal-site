import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Name = {
  first: string;
  last: string;
  title: string;
};

type Person = {
  name: Name;
  location: object;
};

type Location = any;

const fetchData = () => {
  return axios.get(`https://randomuser.me/api/?results=20`).then((response) => {
    console.log(response.data);
    return response.data.results;
  });
};

const flattenLocations = (locations: Location[]) => {
  const data = [];
  const headers = [
    'number',
    'name',
    'latitude',
    'longitude',
    'timezone',
    'country',
    'city',
    'state',
    'postcode',
  ];
  for (const { street, coordinates, timezone, ...rest } of locations) {
    data.push({
      number: street.number,
      name: street.name,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      timezone: timezone.description,
      ...rest,
    });
  }
  console.log(data);
  console.log(headers);
  return { headers: headers, data: data };
};

export default function TableSort() {
  const [data, setData] = useState<Person[]>([]);
  const [flatLocations, setFlatLocations] = useState<{
    headers: any[];
    data: any[];
  }>({ headers: [], data: [] });

  useEffect(() => {
    fetchData().then((response: any) => {
      setData(response);
      setFlatLocations(
        flattenLocations(response.map((person: Person) => person.location))
      );
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {flatLocations.headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {flatLocations.data.map((location, idx) => {
            return (
              <tr key={idx}>
                {flatLocations.headers.map((header, id) => (
                  <td key={id}>{location[header]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
