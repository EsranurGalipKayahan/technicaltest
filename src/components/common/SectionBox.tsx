import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import { flexCenter, sectionStyle } from '../styles/commonStyles'

interface ISectionBoxProps {
  children: ReactNode | ReactNode[]
}

export const SectionBox = ({ children }: ISectionBoxProps) => {
  return <Box sx={sectionStyle}>{children}</Box>
}
