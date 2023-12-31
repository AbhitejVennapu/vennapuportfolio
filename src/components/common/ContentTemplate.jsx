import { Stack, Typography, Box } from '@mui/material'

const ContentTemplate = ({ position, organisation, startDate, endDate, location, description }) => {
  return (
    <> 
    <Stack spacing={0} sx= {{alignItems: 'left', textAlign: 'left'}}>
        <Typography sx = {{ fontWeight : "700", fontSize: "17px"}}> {position} | {organisation} </Typography>
        <Typography sx = {{ fontWeight : "550", fontSize: "13px"}}> {location} | {startDate} - {endDate} </Typography>
    </Stack>
    <Box sx = {{ marginTop: '7px', textAlign: 'left', alignItems: 'right'}}>
    { description.map((item,index) => (
            <Typography 
            sx = {{ 
              fontWeight : "500", 
              fontSize: "13px", 
              marginTop: '3px', 
              color: (theme) => (theme.palette.mode === "dark" ? "#BBB" : "#000")}} key = {index}> {item}  </Typography>
        ))
        }
    </Box>
    </>
  )
}

export default ContentTemplate
