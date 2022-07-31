import { Stack, Skeleton } from '@mui/material'
import { listSkeletonContainerStyle } from '../styles/commonStyles'

export const ListSkeleton = () => {
  return (
    <Stack sx={listSkeletonContainerStyle} justifyContent={'space-between'}>
      {[0, 1, 2, 3].map(() => (
        <Skeleton height={150} animation="wave" />
      ))}
    </Stack>
  )
}
