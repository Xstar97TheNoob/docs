import React, { useState } from 'react';

const GeneratePullCommand = () => {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [outputCommands, setOutputCommands] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProcess = () => {
    setLoading(true);
    // Simulate processing the input text to generate output commands
    setTimeout(() => {
      const lines = inputText.split('\n');
      const uniqueCommands = new Set();

      lines.forEach((line) => {
        if (line.includes('Back-off pulling image')) {
          const imageName = line.match(/"([^"]+)"/)[1];
          const command = `sudo docker pull ${imageName}`;
          uniqueCommands.add(command);
        }
      });

      const output = Array.from(uniqueCommands);
      setOutputCommands(output);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleOpen}>Auto Generate Pull Commands</button>
      {open && (
        <dialog open>
          <div>
            <textarea
              rows="6"
              cols="50"
              placeholder="Input Text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          {loading && <div>Loading...</div>}
          <div>
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleProcess}>Submit</button>
          </div>
          <div>
            <h3>Generated Commands:</h3>
            <ul>
              {outputCommands.map((command, index) => (
                <li key={index}>{command}</li>
              ))}
            </ul>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default GeneratePullCommand;