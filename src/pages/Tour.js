import React from 'react'
import {Container, Typography} from '@mui/material'
import QuiltedImageList from '../components/ImageCollage'
import Box from '@mui/material/Box'
import CustomizedAccordions from '../components/Accordian'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BasicModal from '../components/Modal'
function Tour() {
  return (
    <Container sx={{width: 900}}>
        <Typography variant="h3" component="h3" marginTop={3}>
            Explore the worlds in Vegas
        </Typography>
        <Box 
            sx = {{display: 'flex'}}
            marginTop = {3}
        >
            <img 
                src="https://media.timeout.com/images/105124791/750/422/image.jpg" 
                alt="" 
                height={325}
                />
            <QuiltedImageList 
            />
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, asperiores omnis. Voluptas nulla explicabo, iure corrupti similique saepe, est recusandae, at eum laborum ipsa natus numquam voluptate! Necessitatibus quaerat quidem minus esse atque veritatis aspernatur cum obcaecati quibusdam, id temporibus?
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                Frequently asked questions
            </Typography>
            <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal />
            </BottomNavigation>
        </Paper>
    </Container>
  )
}

export default Tour