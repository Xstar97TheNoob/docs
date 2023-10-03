import React, { useState } from 'react';

const GeneratePullCommand = () => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [outputCommands, setOutputCommands] = useState([]);

  const handleProcess = () => {
    setLoading(true);
    // Simulate processing the input text to generate output commands
    setTimeout(() => {
      const lines = inputText.split('\n');
      const uniqueCommands = new Set();

      lines.forEach((line) => {
        if (line.includes('Back-off pulling image')) {
          const imageName = line.match(/"([^"]+)"/)[1];
          const command = `docker pull ${imageName}`;
          uniqueCommands.add(command);
        }
      });

      const output = Array.from(uniqueCommands);
      setOutputCommands(output);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="centered-card">
      <h2>Auto Generate Pull Commands</h2>
      <div className="input-container">
        <label htmlFor="appEvents">App Events:</label>
        <textarea
          id="appEvents"
          rows="6"
          cols="50"
          placeholder="Enter App Events here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={loading}
        />
      </div>
      <button
        onClick={handleProcess}
        disabled={loading}
        className="button button--primary"
      >
        {loading ? 'Generating...' : 'Submit'}
      </button>
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
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
  );
};

export default GeneratePullCommand;
