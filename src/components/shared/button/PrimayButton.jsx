import { Button } from '@mui/material'
import React from 'react'

const PrimayButton = ({children, size}) => {
  return <Button size={size} variant="contained" sx={{fontWeight: "600", paddingY: "10px", paddingX: "20px", bgcolor:"#f44647", color:"#fff" }}>{children}</Button>
}

export default PrimayButton