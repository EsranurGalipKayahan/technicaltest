import { Link } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import { HERO_IMG } from '../../data/constants'
import { fitImageToBackgroundStyle } from '../styles/commonStyles'

const heroText = (
  <svg viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="35" style={{ font: 'italic 23px sans-serif' }}>
      Discover
    </text>
    <text x="114" y="35" style={{ font: ' bold 35px sans-serif' }}>
      trends
    </text>
    <text x="55" y="75" style={{ font: 'italic 15px sans-serif' }}>
      of
    </text>
    <text
      x="75"
      y="75"
      style={{ font: 'italic 40px serif', fill: 'darksalmon ' }}
    >
      Sara Beauty!
    </text>
  </svg>
)

export const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HERO_IMG})`,
        ...fitImageToBackgroundStyle,
      }}
    >
      <Stack sx={{ pl: { xs: 15 }, pt: { xs: 15 } }} display={'flex'}>
        <Box sx={{ marginLeft: { xs: 10, md: 5 } }}>{heroText}</Box>
        <Typography
          variant={'h6'}
          fontFamily={'serif'}
          fontStyle={'italic'}
          align={'center'}
          sx={{
            ml: { xs: 25, md: 45 },
            mr: 2,
            fontSize: 15,
          }}
        >
          "Get chance to have one"
        </Typography>
        <Link to={'/products'}>
          <Button
            variant={'outlined'}
            sx={{ mt: { xs: 2 }, ml: { xs: '60%', md: '40%' } }}
          >
            Start
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}
