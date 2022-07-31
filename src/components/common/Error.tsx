import { Box, Typography, Stack } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { flexCenter } from '../styles/commonStyles'
import { DEFAULT_ERROR_MESSAGE } from '../../data/messages'
import { ReactNode } from 'react'

interface IErrorProps {
  message?: string
  icon?: ReactNode
}

export const Error = ({ message, icon }: IErrorProps) => {
  return (
    <Box>
      <Stack sx={{ pt: 2, ...flexCenter }}>
        {icon || <ErrorOutlineIcon fontSize={'large'} color={'primary'} />}
        <Typography fontStyle={'italic'} color={'text.secondary'}>
          {message || DEFAULT_ERROR_MESSAGE}
        </Typography>
      </Stack>
    </Box>
  )
}
