// src/FilterOptions.js
import React from 'react';
import Select from 'react-select';
import styles from './FilterOptions.module.css';

const FilterOptions = ({ options, selectedOptions, handleSelectChange }) => {
  return (
    <div className={styles.filterContainer}>
      <h3>Multi Filter:</h3>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleSelectChange}
        className={styles.select}
      />
    </div>
  );
};

export default FilterOptions;
