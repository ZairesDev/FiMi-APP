import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'


const SignUpComp = () => {
    return (
        <div className='paper-pos'>
            <Paper elevation={24} sx={{
                display: 'flex', flexWarp: 'wrap', justifyContent: 'center', mt: '30vh', width: '40vw',
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWarp: 'wrap', flexDirection: 'column', p: '50px', width: '25vw' }}>
                    <Typography className='form-spacing form-header'>
                        Sign Up
                    </Typography>
                    <TextField className='form-spacing' id="standard-basic" label='Username' variant='standard' />
                    <TextField className='form-spacing' id="standard-basic" label="Password" variant="standard" />
                    <Button className='submit form-spacing' variant="contained">Submit</Button>
                </Box>
            </Paper>

        </div>
    )
}

export default SignUpComp