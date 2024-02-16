import * as React from 'react';
import ProjectCreationStepper from './projectCreationStepper';
import { Grid, Paper } from '@mui/material';
import CustomTheme from '../components/CustomTheme';

export default function FixedContainer() {
  return (
    <>
    <CustomTheme>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Title
        </Grid>
        <Grid item xs={4}>
          4
        </Grid>
        <Grid item xs={4}>
          4
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <ProjectCreationStepper />
          </Paper>
        </Grid>
      </Grid>
    </CustomTheme>


    </>
  );
}