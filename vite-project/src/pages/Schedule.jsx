import React from 'react'
import DrawerSideBar from '../component/DrawerSideBar'
import Activity from '../component/Activity'
import { Box } from '@mui/material'
import styles from "./Home.module.css"


const Schedule = () => {
  return (
    <div>
      
      <Box className={styles.box}>
        <DrawerSideBar />
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Activity />
        <br />
        </Box>
      </Box>
    </div>
  )
}

export default Schedule
