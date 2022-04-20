import React from 'react'
import TourCard from '../components/TourCard';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import cities from '../data.json'
function Home() {
  return (
    <Container sx={{
        marginY: 5
      }}>
        {cities.map((city, index) => {
          return (
            <div key={index}>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
                >
                Top {city.name} tours
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour) => {
                  return <TourCard 
                    {...tour}
                    key={tour.id}
                  />
                })}
              </Grid>
            </div>
        )})}
      </Container>
  )
}

export default Home