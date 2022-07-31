export const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
}
export const sectionStyle = {
  ...flexCenter,
  width: '80%',
  height: 'calc(100vh - 75px)',
}
export const containerStyle = {
  mt: 2,
  display: 'flex',
  justifyContent: 'center',
}
export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '90vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}
export const listSkeletonContainerStyle = { width: 550, height: 439 }
export const fitImageToBackgroundStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: 'calc(100vh - 75px)',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}
export const sectionChildrenStyle = {
  alignSelf: 'center',
  mr: { xs: 1, md: 5 },
}
