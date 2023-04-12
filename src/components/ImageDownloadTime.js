import React, { useState, useEffect } from "react";

const DownloadTime = ({ size = 450, speed = 50 }) => {
  const [inputSize, setInputSize] = useState(size);
  const [inputSpeed, setInputSpeed] = useState(speed);
  const [time, setTime] = useState(0);

  const calculateTime = () => {
    const speedInMb = inputSpeed / 8; // Convert speed from Mbit/s to MB/s
    setTime(inputSize / speedInMb); // Calculate time in seconds
  };

  const formatTime = () => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins} min ${secs} sec`;
  };

  const color = time <= 120 ? 'green' : 'red';

  const styles = {
    container: {
      backgroundColor: 'var(--ifm-background-color)',
      color: 'var(--ifm-font-color-base)',
      boxShadow: 'var(--ifm-box-shadow)',
      borderRadius: 'var(--ifm-border-radius)',
      padding: '20px',
      border: '1px solid var(--ifm-border-color)',
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center', // Center align the child elements
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '10px',
    },
    inputLabel: {
      marginBottom: '5px',
    },
    inputField: {
      display: 'flex',
      alignItems: 'center',
    },
    inputUnit: {
      marginLeft: '5px',
    },
    button: {
      marginTop: '10px',
    },
    result: {
      color,
      marginTop: '10px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };  

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Image Download Time Calculator</h3>
      <div style={styles.inputContainer}>
        <label style={styles.inputLabel}>Size</label>
        <div style={styles.inputField}>
          <input
            type="number"
            value={inputSize}
            onChange={(e) => setInputSize(Number(e.target.value))}
          />
          <span style={styles.inputUnit}>MB</span>
        </div>
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.inputLabel}>Speed</label>
        <div style={styles.inputField}>
          <input
            type="number"
            value={inputSpeed}
            onChange={(e) => setInputSpeed(Number(e.target.value))}
          />
          <span style={styles.inputUnit}>Mb/s</span>
        </div>
      </div>
      <button style={styles.button} onClick={calculateTime}>
        Calculate
      </button>
      {time > 0 && (
        <p style={styles.result}>Download time: {formatTime()}</p>
      )}
    </div>
  );
};

export default DownloadTime;
