import { useState } from "react";
import "./App.css";
import Country from "./components/Country";
import Form from "./components/Form";

function App() {
  const [countries, setCountries] = useState([]);

  const [countryName, setCountryName] = useState("");
  const [goldMedals, setGoldMedals] = useState(0);
  const [silverMedals, setSilverMedals] = useState(0);
  const [bronzeMedals, setBronzeMedals] = useState(0);

  // 1. Add Country
  const addCountry = (e) => {
    e.preventDefault();

    // 1. 나라 이름을 입력했을 때 이미 등록된 국가라면 alert 메시지를 띄워 사용자에게 알립니다.
    //    1.1 이미 존재하는 이름인지 찾기 find(): name...
    //    1.2 if() : 만약 존재하면, alert("Existing country")
    //    1.3 else :

    // 2. 새로운 나라 추가
    const newCountryList = [
      ...countries,
      {
        id: new Date().getTime(),
        countryName,
        goldMedals,
        silverMedals,
        bronzeMedals,
      },
    ];

    // 3. setCountries
    setCountries(newCountryList);

    // 4. input 필드는 다시 빈 값
    setCountryName("");
    setGoldMedals(0);
    setSilverMedals(0);
    setBronzeMedals(0);
  };

  // 2. Update Country
  const updateCountry = (e) => {
    e.preventDefault();

    // 2-1. 입력된 국가가 등록되지 않은 경우 alert 메시지를 띄워 사용자에게 알립니다.

    // 2-2. 수정 후에도 같은 배열 반환니까 맵 함수로
    const updatedCountries = countries.map((country) => {
      // id로? 이름으로? 이미 존재하는 국가인지 확인
      // if the ids? names? are matched,,,,, return .......
      if (country.countryName === countryName) {
        // 엄격비교
        return {
          ...country,
          id: new Date().getTime(),
          countryName,
          goldMedals,
          silverMedals,
          bronzeMedals,
        };
      } else {
        return country;
      }
    });

    // 2-3. setCountries
    setCountries(updatedCountries);

    // 2.4 Initialize input fields
    setCountryName("");
    setGoldMedals(0);
    setSilverMedals(0);
    setBronzeMedals(0);
  };

  // 3. Delete Country
  const deleteCountry = (e) => {
    // fileter 이용? / id?
  };

  return (
    <>
      <div>
        <h1>Medal Tracker</h1>

        <Form
          countryName={countryName}
          setCountryName={setCountryName}
          goldMedals={goldMedals}
          setGoldMedals={setGoldMedals}
          silverMedals={silverMedals}
          setSilverMedals={setSilverMedals}
          bronzeMedals={bronzeMedals}
          setBronzeMedals={setBronzeMedals}
          addCountry={addCountry}
          updateCountry={updateCountry}
        />

        <Country countries={countries} deleteCountry={deleteCountry} />
      </div>
    </>
  );
}

export default App;
