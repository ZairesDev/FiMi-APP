import { Box, Card, CardContent, createTheme, ThemeProvider, Typography } from '@mui/material'
import SearchBar from "material-ui-search-bar";
import React from 'react'
import './SearchComp.css'

const SearchComp = () => {

    return (
        <div>
            <div className='test'>

            <SearchBar/>
            </div>
            <Box sx={{ display: 'flex', flexWarp: 'wrap', alignItems: 'center', justifyContent: 'center', mt: '5vh' }}>
                <Card className='box' >
                    <CardContent className='box'>
                        <Typography className='card-header card-background'>
                            Employee | John Jacob | ID: 45
                        </Typography>
                        <Typography className='overseers-deco card-background'>
                            Supervisor: Liam Conner | QA: Shelly Jane
                        </Typography>
                        <Typography className='site-deco card-background'>
                            Site: Work Remote | Group: A | Lang: ENG
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default SearchComp