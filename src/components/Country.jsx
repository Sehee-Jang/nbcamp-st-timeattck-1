import React from "react";

const Country = ({ countries, deleteCountry }) => {
  return (
    <div>
      {/* Country List Here */}
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Gold</th>
            <th>Silver</th>
            <th>Bronze</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td>{country.countryName}</td>
              <td>{country.goldMedals}</td>
              <td>{country.silverMedals}</td>
              <td>{country.bronzeMedals}</td>
              <td>
                <button onClick={deleteCountry}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Country;
