import { Link } from 'react-router-dom'
import { Button, Stack } from '@mui/material'
import { HERO_IMG, HERO_TEXT } from '../../data/constants'
import { flexCenter } from '../styles/commonStyles'
import { SectionBox } from '../common/SectionBox'

export const Home = () => {
  return (
    <SectionBox
      style={{
        backgroundImage: `url(${HERO_IMG})`,
        position: 'relative',
      }}
    >
      <Stack
        sx={{
          ...flexCenter,
          position: 'absolute',
          top: { xs: '15%', sm: '10%' },
          right: { xs: '1%', md: '3%' },
          width: { xs: 300, sm: 400, md: 500 },
        }}
      >
        <div className={'svg-container'}>
          <object
            type={'image/svg+xml'}
            data={HERO_TEXT}
            width={'100%'}
            height={'100%'}
            className={'svg-content'}
          ></object>
        </div>

        <Link to={'/products'}>
          <Button variant={'outlined'} sx={{ mt: { xs: 2 } }}>
            Start
          </Button>
        </Link>
      </Stack>
    </SectionBox>
  )
}
