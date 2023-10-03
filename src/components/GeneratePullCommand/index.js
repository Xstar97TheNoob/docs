import React, { useState, useEffect } from 'react';

const GeneratePullCommand = () => {
  const [inputText, setInputText] = useState('');
  const [outputCommands, setOutputCommands] = useState([]);

  useEffect(() => {
    const lines = inputText.split('\n');
    const output = [];

    lines.forEach((line) => {
      if (line.includes('Back-off pulling image')) {
        const imageNameMatch = line.match(/"([^"]+)"/);
        if (imageNameMatch) {
          const imageName = imageNameMatch[1];
          const command = `sudo docker pull ${imageName}`;
          output.push(command);
        }
      }
    });

    setOutputCommands(output);
  }, [inputText]);

  return (
    <div className="centered-card">
      <div className="centered-content">
        <h2>Auto Generate Pull Commands</h2>
        <div className="input-container">
          <label htmlFor="appEvents">App Events:</label>
          <textarea
            id="appEvents"
            rows="6"
            cols="50"
            style={{ width: '100%', height: '400px' }} // Set the width to 100% and height to 400px
            placeholder="Enter App Events here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        {outputCommands.length > 0 && (
          <div className="output-commands">
            <h3>Generated Commands:</h3>
            <pre>
              {outputCommands.map((command, index) => (
                <code key={index}>{command}</code>
              ))}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratePullCommand;
