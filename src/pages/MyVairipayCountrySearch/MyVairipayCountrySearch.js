import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../db/lan-coun.json";
import SearchBox from "../../components/SearchBox";

export default function MyVairipayCountrySearch() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [countries, setCountries] = useState([]);
    const [filterdCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        const countriesArray = data.map((country) => ({
            name: country.country_name,
            image: country.image,
        }));
        setCountries(countriesArray);
        setFilteredCountries(countriesArray);
    }, []);


    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/business-profile-gallery");
    };

    const handleSearch = (searchTerm) => {
        const filtered = countries.filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    const handleSelectChange = (event) => {
        setSelectedCountry(event.target.value);
        handleSearch(event.target.value);
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
                    {
                        countries.map((country) => <option value={country.name}>{country.name}</option>)
                    }
                </select>
                <SearchBox
                    onSearch={handleSearch}
                    placeholder="Search Country"
                    bgColor={"gray-100"}
                    className={
                        "max-w-[297px] rounded-lg border-0 border-[#D9D9D9] text-[21.38px] font-extrabold text-[#02227E] px-8 mt-2"
                    }
                />
                <div className="grid grid-cols-3 gap-4 mt-5 mb-5">
                    {filterdCountries.length !== 0 &&
                        filterdCountries.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleSubmit()}
                                    className="bg-[#3760CB] rounded-[30px] border-2 border-[#02227E] w-[98px] h-[100px] flex items-center justify-center"
                                >
                                    <img
                                        src={process.env.PUBLIC_URL + `/images/countries/${item.image}`}
                                        alt={item.country_name}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
