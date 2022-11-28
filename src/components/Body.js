import { Card, Grid } from '@mui/material'
import React from 'react'

const Body = () => {
  return (
    <>
        <Grid container sx={{height: "100vh"}}>
            <Grid item xs={12} sm={12} md={12}>
            <Card  sx={{backgroundImage: "linear-gradient(to bottom right, #00fdaf, #36cee7)"}}>

            <h2>Hello</h2>
            </Card>

            </Grid>
        </Grid>
    </>
  )
};

export default Body;