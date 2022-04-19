import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { AccessTime } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        }
    }
})
function TourCard() {
  return (
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
            <Paper elevation={3} >
                <img 
                    src="https://cdn.getyourguide.com/img/location/5ce265372f802.jpeg/88.jpg"  
                    alt="fall" 
                    className='img'
                    />
                <Box paddingX={1}>
                    <Typography variant='subtitle1' component='h2'>
                        Immerse into the Falls
                    </Typography>
                    <Box 
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                        >
                        <AccessTime sx={{
                            width: 12.5
                        }}/>
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            5 Hours
                        </Typography>
                    </Box>
                    <Box 
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                        marginTop={3}
                        >
                        <Rating 
                            name='read-only'
                            value={4.5}
                            precision={0.5}
                            size="small"
                            readOnly
                            />
                        <Typography variant='body2' component='p' marginLeft={0.5}>
                            4.5
                        </Typography>
                        <Typography variant='body3' component='p' marginLeft={1.5}>
                            (655 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h3' marginTop={0}>
                            From $132
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>
      </Grid>
  )
}

export default TourCard