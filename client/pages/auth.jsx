import React, { useState } from "react";
import {
  Container,
  Typography,
  Tab,
  Paper,
  Tabs,
  Box,
  Grid,
} from "@material-ui/core";

const TabPanel = ({ children, index, value, ...other }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`auth-form-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const auth = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth='sm' style={{ marginTop: "20rem" }}>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            variant='fullWidth'
            aria-label='auth form tabs'
          >
            <Tab label={<span className='tab__label'>Login</span>} />
            <Tab label={<span className='tab__label'>Register</span>} />
          </Tabs>

          {/* <form className='form' noValidate autoComplete='off'> */}
          <TabPanel value={value} index={0}>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={8} sm={8} md={8} className='auth__grid'>
                <h1>Login Form</h1>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={8} sm={8} md={8} className='auth__grid'>
                <h1>Registration Form</h1>
              </Grid>
            </Grid>
          </TabPanel>
          {/* </form> */}
        </Paper>
      </Container>
    </div>
  );
};

export default auth;
