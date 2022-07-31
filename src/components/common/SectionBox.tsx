import { ReactNode } from 'react'
import { Box } from '@mui/material'
import {
  fitImageToBackgroundStyle,
  putChildAtProperPosition,
  sectionChildrenStyle,
} from '../styles/commonStyles'
import { BACKGROUND_IMG } from '../../data/constants'

interface ISectionBoxProps {
  children: ReactNode | ReactNode[]
}

export const SectionBox = ({ children }: ISectionBoxProps) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BACKGROUND_IMG})`,
        ...fitImageToBackgroundStyle,
        ...putChildAtProperPosition,
      }}
    >
      <Box sx={sectionChildrenStyle}>{children}</Box>
    </Box>
  )
}
