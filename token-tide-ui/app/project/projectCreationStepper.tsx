"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, StepButton, TextField } from '@mui/material';

export default function ProjectCreationStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box >
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        <Step key="title" completed={ title != '' }>
          <StepButton optional={activeStep === 0 ? null : title} onClick={() => { setActiveStep(0); }} >
              Título do Projeto
          </StepButton>
          <StepContent>
            <TextField fullWidth id="outlined-basic" variant="standard"
              value={title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(event.target.value);
              }}
            />
            <Box sx={{ mb: 2 }}>
              <div>
                <Button variant="outlined" onClick={handleNext} sx={{ mt: 1, mr: 1 }} >
                  Continue
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step key="catregory">
          <StepLabel optional="Title of your project" >
            Categoria
          </StepLabel>
          <StepContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} >
                  Continue
                </Button>
                <Button disabled={false} onClick={handleBack} sx={{ mt: 1, mr: 1 }} >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step key="catregory2">
          <StepLabel optional="Title of your project" >
            Categoria
          </StepLabel>
          <StepContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} >
                  Continue
                </Button>
                <Button disabled={false} onClick={handleBack} sx={{ mt: 1, mr: 1 }} >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step key="catregory22">
          <StepLabel optional="Title of your project" >
            Categoria
          </StepLabel>
          <StepContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} >
                  Continue
                </Button>
                <Button disabled={false} onClick={handleBack} sx={{ mt: 1, mr: 1 }} >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step key="catregory222">
          <StepLabel optional="Title of your project" >
            Categoria
          </StepLabel>
          <StepContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} >
                  Continue
                </Button>
                <Button disabled={false} onClick={handleBack} sx={{ mt: 1, mr: 1 }} >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step key="catregory2222">
          <StepLabel optional="Title of your project" >
            Categoria
          </StepLabel>
          <StepContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} >
                  Continue
                </Button>
                <Button disabled={false} onClick={handleBack} sx={{ mt: 1, mr: 1 }} >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
      {
        activeStep === 2 && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )
      }
    </Box >
  );
}
