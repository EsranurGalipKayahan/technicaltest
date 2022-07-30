import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { flexCenter } from '../styles/commonStyles'

export const Loading = () => {
  return (
    <Box sx={flexCenter}>
      <CircularProgress />
    </Box>
  )
}
