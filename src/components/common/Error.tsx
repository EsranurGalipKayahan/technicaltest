import { Box, Typography, Stack } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { flexCenter } from '../styles/commonStyles'
import { string } from 'yargs'
import { DEFAULT_ERROR_MESSAGE } from '../../data/messages'
import { ReactNode } from 'react'

interface IErrorProps {
  message?: string
  icon?: ReactNode
}

export const Error = ({ message, icon }: IErrorProps) => {
  return (
    <Box sx={flexCenter}>
      <Stack justifyContent={'center'} alignItems={'center'}>
        {icon || <ErrorOutlineIcon fontSize="large" color="primary" />}
        <Typography>{message || DEFAULT_ERROR_MESSAGE}</Typography>
      </Stack>
    </Box>
  )
}
