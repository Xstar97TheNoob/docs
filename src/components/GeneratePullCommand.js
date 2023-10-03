import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

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
      const output = lines.filter((line) => line.includes('Back-off pulling image')).map((line) => {
        const imageName = line.match(/"([^"]+)"/)[1];
        return `sudo docker pull ${imageName}`;
      });
      setOutputCommands(output);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Text Processor</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            rows={6}
            fullWidth
            label="Input Text"
            variant="outlined"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {loading && <LinearProgress />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleProcess} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        <h3>Generated Commands:</h3>
        <ul>
          {outputCommands.map((command, index) => (
            <li key={index}>{command}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextProcessor;
