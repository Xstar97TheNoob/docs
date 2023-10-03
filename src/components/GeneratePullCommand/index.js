import React, { useState, useEffect } from 'react';
import "./styles.css"

const GeneratePullCommand = () => {
  const [inputText, setInputText] = useState('');
  const [outputCommands, setOutputCommands] = useState(new Set()); // Use a Set to store unique commands
  const [useCobia, setUseCobia] = useState(false);

  useEffect(() => {
    const lines = inputText.split('\n');
    const uniqueCommands = new Set(); // Use a Set to track unique commands

    lines.forEach((line) => {
      if (line.includes('Back-off pulling image') || line.includes('Failed to pull image')) {
        const imageNameMatch = line.match(/"([^"]+)"/);
        if (imageNameMatch) {
          const imageName = imageNameMatch[1];
          const command = useCobia
            ? `sudo ctr image pull ${imageName}`
            : `sudo docker pull ${imageName}`;
          uniqueCommands.add(command); // Add the command to the Set
        }
      }
    });

    setOutputCommands(Array.from(uniqueCommands)); // Convert Set to Array for rendering
  }, [inputText, useCobia]);

  return (
    <div className="centered-card">
      <div className="centered-content">
        <div className="input-container">
          <label htmlFor="appEvents">App Events:</label>
          <textarea
            id="appEvents"
            rows="6"
            cols="50"
            style={{ width: '100%', height: '400px' }}
            placeholder="Enter App Events here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="switch-container">
          <label className="switch-label">
            Use Cobia:
            <label className="switch">
              <input
                type="checkbox"
                checked={useCobia}
                onChange={() => setUseCobia(!useCobia)}
              />
              <span className="slider round"></span>
            </label>
          </label>
        </div>
        {outputCommands.length > 0 && (
          <div className="output-commands">
            <h3>Generated Commands:</h3>
            {outputCommands.map((command, index) => (
              <pre key={index}>
                <code>{command}</code>
              </pre>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratePullCommand;
