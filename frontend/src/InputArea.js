// src/InputArea.js
import React from 'react';
import styles from './InputArea.module.css';

const InputArea = ({ inputData, handleInputChange, handleSubmit }) => {
  return (
    <div className={styles.inputContainer}>
      <h2>API Input:</h2>
      <textarea
        rows="3"
        value={inputData}
        onChange={handleInputChange}
        placeholder='{"data":["M","1","334","4","B"]}'
        className={styles.textarea}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Submit
      </button>
    </div>
  );
};

export default InputArea;
