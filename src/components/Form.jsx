import React from "react";

const Form = ({
  countryName,
  setCountryName,
  goldMedals,
  setGoldMedals,
  silverMedals,
  setSilverMedals,
  bronzeMedals,
  setBronzeMedals,
  addCountry,
  updateCountry,
}) => {
  return (
    <form>
      <div>
        <label>Country Name: </label>
        <input
          type='text'
          placeholder='Country Name'
          value={countryName}
          onChange={(e) => {
            setCountryName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Gold: </label>
        <input
          type='number'
          placeholder='0'
          value={goldMedals}
          onChange={(e) => {
            setGoldMedals(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Silver: </label>
        <input
          type='number'
          placeholder='0'
          value={silverMedals}
          onChange={(e) => {
            setSilverMedals(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Bronze: </label>
        <input
          type='number'
          placeholder='0'
          value={bronzeMedals}
          onChange={(e) => {
            setBronzeMedals(e.target.value);
          }}
        />
      </div>
      <div className='button'>
        <button onClick={addCountry}>Add</button>
        <button onClick={updateCountry}>Update</button>
      </div>
    </form>
  );
};

export default Form;
