import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DownloadTime = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get the size and speed query parameters from the URL, or use default values if they are not provided
  const size = queryParams.get("size") ? Number(queryParams.get("size")) : 450;
  const speed = queryParams.get("speed") ? Number(queryParams.get("speed")) : 50;

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
    // ... (your existing styles)
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
