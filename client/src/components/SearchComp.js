import { Box, Card, CardContent, createTheme, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import './SearchComp.css'

const SearchComp = () => {

    return (
        <div>
            <Box sx={{ display: 'flex', flexWarp: 'wrap', alignItems: 'center', justifyContent: 'center', mt: '30vh', width: '40vw', }}>
                <Card >
                    <CardContent>
                        <Typography>
                            Role: Employee
                        </Typography>
                        <Typography>
                            John Jacob; Employee Number: 45
                        </Typography>
                        <Typography>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default SearchComp