// src/MultiFilter.js
import React, { useState } from 'react';
import InputArea from './InputArea';
import FilterOptions from './FilterOptions';
import styles from './MultiFilter.module.css';

const MultiFilter = () => {
  const [inputData, setInputData] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filteredResponse, setFilteredResponse] = useState({});

  const options = [
    { value: 'numbers', label: 'Numbers' },
    { value: 'highestAlphabet', label: 'Highest Alphabet' },
  ];

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleSubmit = () => {
    const data = JSON.parse(inputData).data;
    const response = {};

    if (selectedOptions.some(option => option.value === 'numbers')) {
      response.numbers = data.filter(item => !isNaN(item)).join(',');
    }

    if (selectedOptions.some(option => option.value === 'highestAlphabet')) {
      response.highestAlphabet = data
        .filter(item => isNaN(item))
        .sort((a, b) => b.localeCompare(a))[0];
    }

    setFilteredResponse(response);
  };

  return (
    <div className={styles.container}>
      <InputArea
        inputData={inputData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <FilterOptions
        options={options}
        selectedOptions={selectedOptions}
        handleSelectChange={handleSelectChange}
      />
      <div className={styles.response}>
        <h3>Filtered Response</h3>
        {filteredResponse.numbers && <p>Numbers: {filteredResponse.numbers}</p>}
        {filteredResponse.highestAlphabet && <p>Highest Alphabet: {filteredResponse.highestAlphabet}</p>}
      </div>
    </div>
  );
};

export default MultiFilter;
