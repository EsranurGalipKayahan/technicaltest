import { ReactNode } from 'react'
import { Box } from '@mui/material'
import {
  fitImageToBackgroundStyle,
  putChildAtProperPosition,
  sectionChildrenStyle,
} from '../styles/commonStyles'

interface ISectionBoxProps {
  children: ReactNode | ReactNode[]
  style?: object
}

export const SectionBox = ({ children, style }: ISectionBoxProps) => {
  return (
    <Box
      sx={{
        ...style,
        ...fitImageToBackgroundStyle,
        ...putChildAtProperPosition,
      }}
    >
      <Box sx={sectionChildrenStyle}>{children}</Box>
    </Box>
  )
}
