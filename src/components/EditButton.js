import React from 'react'
import MUIButton from '@mui/material/Button';

export default function EditButton({children, variant, ...props}) {
  return (
    <>
        <MUIButton variant={variant ?? "contained"}{...props}>{children}</MUIButton>
    </>
  )
}
