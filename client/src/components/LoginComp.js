import React, { useState } from 'react'


import { Box, Button, Paper, TextField } from '@mui/material';



const LoginComp = () => {
    return (
        <>
            <Paper elevation={3}>
                <Box
                    component="form"
                    sx={{
                            mt: '50vh', width: '25%',
                    }}
                noValidate
                autoComplete="on"
                >

                <Button variant="contained">Contained</Button>
                <TextField id="standard-basic" label='Username' variant='standard' />
                <TextField id="standard-basic" label="Password" variant="standard" />
            </Box>
        </Paper>
        </>
    )

}

export default LoginComp;