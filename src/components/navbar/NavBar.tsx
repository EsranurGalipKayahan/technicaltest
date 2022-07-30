import React from 'react'
import { AppBar, Toolbar, Stack, Typography, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { LOGO } from '../../data/constants'

export const NavBar = () => {
  return (
    <AppBar position={'sticky'} color={'default'}>
      <Toolbar
        component={Stack}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <img
          src={LOGO}
          style={{ marginRight: 12, height: '75px', objectFit: 'contain' }}
        />
        <AccountCircleIcon fontSize={'large'} color={'primary'} />
      </Toolbar>
    </AppBar>
  )
}
