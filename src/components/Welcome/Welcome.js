import React from "react";
import {Box, Button, Heading } from "grommet";

function Welcome(props) {
  return (
    <div>
      <Box align="center" justify="center" pad="small" animation={{"type":"fadeIn","duration":2000}} background={{"opacity":"medium","color":"black","position":"center","dark":true}} elevation="medium" round="medium" style={{"height":"100vh"}} >
      <Heading level="1" size="large">Welcome to the clouds!</Heading>
        <h3>Details</h3>
        <ul>
          <li>Resumable uploads using tus protocol.</li>
          <li>Easy to share links.</li>
          <li>Unrestricted file uploads.</li>
        </ul>
        <Button
        label='Get Started'
        primary='true'
        href='/'
        color='neutral-1'
      />
      </Box>
    </div>
  );
}

export default Welcome;
