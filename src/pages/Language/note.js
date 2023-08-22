import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import data from "../../db/lan-coun.json";

const Language = () => {
  const [languages, setLanguages] = useState([]);
  const [filteredLanguages, setFilteredLanguages] = useState([]);
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/personal-information");
  };

  useEffect(() => {
    const languagedata = [];

    data.forEach((country) => {
      country.languages.forEach((language) => {
        const existingLanguage = languagedata.find(
          (item) => item.name === language.name
        );

        if (!existingLanguage) {
          languagedata.push({
            name: language.name,
            image: language.image,
          });
        }
      });
    });
    setLanguages(languagedata);
    setFilteredLanguages(languagedata);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = languages.filter((language) =>
      language.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLanguages(filtered);
  };

  return (
    <div className="main-container pt-5">
      <div className="w-full mx-auto flex flex-col justify-between items-center">
        <div>
          <span className="text-[30px] font-bold">Select Language</span>
        </div>

        <div className="mt-3 w-full mx-auto max-w-[255px]">
          <SearchBox 
            onSearch={handleSearch}
            placeholder="Search Languages"
            classname="rounded-xl pr-8"
          />
        </div>

        <div
          style={{ width: "100vw" }}
          className="flex flex-col justify-center items-center mt-4"
        >
          {filteredLanguages.map((language, i) => (
            <div
              key={i}
              className="w-full mx-auto flex items-center justify-center pt-4 hover:bg-[#DCE1EA] hover:border-2 hover:border-[#3760CB]"
            >
              <img
                className="max-w-[100px] max-h-[100px]"
                src={process.env.PUBLIC_URL + `/images/flags/${language.image}`}
                alt={language.name}
              />
              <span className=" text-[21px] font-medium country-name">
                {language.name}
              </span>
            </div>
          ))}
        </div>
        <div className=" mt-custom-27 w-full">
          <Button
            onClick={handleNext}
            text="Submit>>"
            size="45px"
            className="text-[#01195C] text-[21.06px] font-bold max-w-[147px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Language;
