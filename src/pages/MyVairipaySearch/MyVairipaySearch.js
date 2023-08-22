import React, { useEffect, useState } from "react";
import data from "../../db/lan-coun.json";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/SearchBox";

export default function MyVairipaySearch() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [varipays, setVaripays] = useState([]);
  const [filterdVaripays, setFilteredVaripays] = useState([]);
  const [selectedCountryVaripays, setSelectedCountryVaripays] = useState([]);

  useEffect(() => {
    const uniqueVairipaysMap = new Map();

    data.forEach((item) => {
      const vairipays = item.vairipays || [];
      vairipays.forEach((vairipay) => {
        uniqueVairipaysMap.set(vairipay.name, vairipay);
      });
    });

    const uniqueVairipaysArray = Array.from(uniqueVairipaysMap.values());
    setVaripays(uniqueVairipaysArray);
    setFilteredVaripays(uniqueVairipaysArray);

    const countriesArray = data.map((country) => ({
      country_name: country.country_name,
      image: country.image,
    }));
    setCountries(countriesArray);
  }, []);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/my-vairipay-country-search");
  };

  const handleSearch = (searchTerm) => {
    const filtered = varipays.filter((varipay) =>
      varipay.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVaripays(filtered);
  };

  const handleSelectChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);

    if (selectedCountry) {
      const selectedCountryData = data.find(
        (country) => country.country_name === selectedCountry
      );
      if (selectedCountryData) {
        setFilteredVaripays(selectedCountryData.vairipays);
        setSelectedCountryVaripays(selectedCountryData.vairipays);
      } else {
        setFilteredVaripays(varipays);
      }
    } else {
      setFilteredVaripays(varipays);
    }
  };

  return (
    <div className="main-container">
      <div className="w-full mx-auto flex flex-col justify-center items-center pt-2">
        <div className="w-full mx-auto flex items-center justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/VairipaySearchLogo.png"}
            alt="Vairipay Search Logo"
          />
        </div>
        <select value={selectedCountry} onChange={handleSelectChange}>
          <option value="">Search Country (Any)</option>
          {countries.map((country) => (
            <option value={country.country_name}>{country.country_name}</option>
          ))}
        </select>
        <SearchBox
          onSearch={handleSearch}
          placeholder="Search Varipay"
          bgColor={"gray-100"}
          className={
            "max-w-[297px] rounded-lg border-0 border-[#D9D9D9] text-[21.38px] font-extrabold text-[#02227E] px-8 mt-2"
          }
        />
        <div className="grid grid-cols-3 gap-4 mt-5 mb-5">
          {filterdVaripays.length !== 0 &&
            filterdVaripays.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSubmit()}
                  className="bg-[#3760CB] rounded-[30px] border-2 border-[#02227E] w-[98px] h-[100px] flex items-center justify-center"
                >
                  <img
                   src={process.env.PUBLIC_URL + `/images/varipays/${item.image}`}
                    alt={item.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
